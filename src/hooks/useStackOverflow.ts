import { useState, useEffect } from 'react';
import { stackoverflowService } from '../services/stackoverflow.service';
import type { StackOverflowUser, StackOverflowBadge } from '../types/stackoverflow.types';

export const useStackOverflow = (userId?: string) => {
  const [user, setUser] = useState<StackOverflowUser | null>(null);
  const [badges, setBadges] = useState<StackOverflowBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userData, badgesData] = await Promise.all([
          stackoverflowService.getUserProfile(userId),
          stackoverflowService.getUserBadges(userId),
        ]);
        setUser(userData);
        setBadges(badgesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch StackOverflow data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { user, badges, loading, error };
};


