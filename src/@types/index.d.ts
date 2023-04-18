export type User = {
  login: string;
  html_url: string;
  avatar_url: string;
  followers: number;
  name: string;
  company: string;
  login: string;
  bio;
};

export type CardInfo = {
  number: number;
  body: string;
  title: string;
  updated_at: string;
};

export type SearchResponse = {
  items: CardInfo[];
  total_count: number;
};

export type IssueResponse = {
  body: string;
  comments: number;
  updated_at: string;
  user: {
    login: string;
  };
  title: string;
  html_url: string;
};
