import axios from 'axios';
import type { GitHubUser, GitHubRepo, GitHubLanguageStats } from '../types/github.types';
import { API_CONFIG } from '../utils/constants';

const { baseUrl, username } = API_CONFIG.github;
const CACHE_DURATION = API_CONFIG.cacheDuration;

class GitHubService {
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();

  private async fetchWithCache<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data as T;
    }

    const data = await fetcher();
    this.cache.set(key, { data, timestamp: Date.now() });
    return data;
  }

  async getUserProfile(user: string = username): Promise<GitHubUser> {
    return this.fetchWithCache(`user-${user}`, async () => {
      const response = await axios.get(`${baseUrl}/users/${user}`);
      return response.data;
    });
  }

  async getUserRepos(user: string = username): Promise<GitHubRepo[]> {
    return this.fetchWithCache(`repos-${user}`, async () => {
      const response = await axios.get(`${baseUrl}/users/${user}/repos`, {
        params: {
          sort: 'updated',
          per_page: 100,
        },
      });
      return response.data;
    });
  }

  async getLanguageStats(user: string = username): Promise<GitHubLanguageStats> {
    const repos = await this.getUserRepos(user);
    const stats: GitHubLanguageStats = {};

    for (const repo of repos) {
      if (repo.language && !repo.fork) {
        stats[repo.language] = (stats[repo.language] || 0) + 1;
      }
    }

    return stats;
  }

  async getFeaturedRepos(user: string = username, repoNames: string[]): Promise<GitHubRepo[]> {
    const allRepos = await this.getUserRepos(user);
    return allRepos.filter(repo => repoNames.includes(repo.name));
  }

  async getOrgRepos(org: string): Promise<GitHubRepo[]> {
    return this.fetchWithCache(`org-repos-${org}`, async () => {
      const response = await axios.get(`${baseUrl}/orgs/${org}/repos`, {
        params: {
          sort: 'updated',
          per_page: 100,
        },
      });
      return response.data.map((repo: GitHubRepo) => ({
        ...repo,
        isContribution: true,
        contributionOrg: org,
      }));
    });
  }

  async getCombinedRepos(user: string = username, orgs: string[] = []): Promise<GitHubRepo[]> {
    try {
      const userRepos = await this.getUserRepos(user);

      // Fetch repos from all specified organizations
      const orgReposPromises = orgs.map(org => this.getOrgRepos(org));
      const orgReposArrays = await Promise.all(orgReposPromises);
      const orgRepos = orgReposArrays.flat();

      // Separate user's own repos and forks
      const ownRepos = userRepos.filter(repo => !repo.fork);
      const forkedRepos = userRepos.filter(repo => repo.fork);

      // Create a map to track repo names from org repos and own repos
      const repoNameMap = new Map<string, GitHubRepo>();

      // First, add org repos (highest priority)
      orgRepos.forEach(repo => {
        repoNameMap.set(repo.name.toLowerCase(), repo);
      });

      // Then add own repos (if not already present)
      ownRepos.forEach(repo => {
        if (!repoNameMap.has(repo.name.toLowerCase())) {
          repoNameMap.set(repo.name.toLowerCase(), repo);
        }
      });

      // Finally, add forked repos (only if name not already present)
      const uniqueForkedRepos = forkedRepos.filter(
        repo => !repoNameMap.has(repo.name.toLowerCase())
      );

      // Combine: org repos + own repos + unique forks at the end
      const uniqueRepos = [...repoNameMap.values(), ...uniqueForkedRepos];

      return uniqueRepos;
    } catch (error) {
      console.error('Error fetching combined repos:', error);
      return await this.getUserRepos(user);
    }
  }
}

export const githubService = new GitHubService();
