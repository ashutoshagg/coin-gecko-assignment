export interface ICoin {
  id: string;
  name: string;
  description: string;
  hashing_algorithm: string;
  genesis_date: string;
  market_cap_rank: number;
  market_data: any;
  symbol: string;
  links: ILink;
}

interface ILink {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: number;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: any;
}
