import axios from 'axios';
import type {
  StackOverflowUser,
  StackOverflowBadge,
  StackOverflowTag,
} from '../types/stackoverflow.types';
import { API_CONFIG } from '../utils/constants';

const { baseUrl, userId } = API_CONFIG.stackoverflow;
const CACHE_DURATION = API_CONFIG.cacheDuration;

class StackOverflowService {
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

  async getUserProfile(id: string = userId): Promise<StackOverflowUser> {
    return this.fetchWithCache(`user-${id}`, async () => {
      const response = await axios.get(`${baseUrl}/users/${id}`, {
        params: {
          site: 'stackoverflow',
        },
      });
      return response.data.items[0];
    });
  }

  async getUserBadges(id: string = userId): Promise<StackOverflowBadge[]> {
    return this.fetchWithCache(`badges-${id}`, async () => {
      const response = await axios.get(`${baseUrl}/users/${id}/badges`, {
        params: {
          site: 'stackoverflow',
          pagesize: 100,
          sort: 'rank',
        },
      });
      return response.data.items;
    });
  }

  async getUserTopTags(id: string = userId): Promise<StackOverflowTag[]> {
    return this.fetchWithCache(`tags-${id}`, async () => {
      const response = await axios.get(`${baseUrl}/users/${id}/top-tags`, {
        params: {
          site: 'stackoverflow',
          pagesize: 10,
        },
      });
      return response.data.items;
    });
  }
}

export const stackoverflowService = new StackOverflowService();
