import { useState, useEffect } from 'react';
import { githubService } from '../services/github.service';
import type { GitHubUser, GitHubRepo } from '../types/github.types';

export const useGitHub = (username?: string, contributionOrgs?: string[]) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userData = await githubService.getUserProfile(username);
        
        // Fetch combined repos (user repos + org contributions)
        const reposData = contributionOrgs && contributionOrgs.length > 0
          ? await githubService.getCombinedRepos(username, contributionOrgs)
          : await githubService.getUserRepos(username);
        
        setUser(userData);
        setRepos(reposData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch GitHub data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, contributionOrgs]);

  return { user, repos, loading, error };
};


