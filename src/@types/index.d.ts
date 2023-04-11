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
  id: number;
  body: string;
  title: string;
  updated_at: string;
};

export type IssuesResponse = {
  items: CardInfo[];
};
