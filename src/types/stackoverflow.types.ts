export interface StackOverflowUser {
  user_id: number;
  display_name: string;
  reputation: number;
  profile_image: string;
  link: string;
  badge_counts: {
    bronze: number;
    silver: number;
    gold: number;
  };
}

export interface StackOverflowBadge {
  badge_id: number;
  rank: 'gold' | 'silver' | 'bronze';
  name: string;
  link: string;
  award_count: number;
}

export interface StackOverflowTag {
  name: string;
  count: number;
}
