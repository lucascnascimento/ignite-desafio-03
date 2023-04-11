import { IssuesResponse } from "../@types";
import { api } from "./config";

export const searchIssues = async (text: string) => {
  const repo = `${import.meta.env.VITE_USERNAME}/${
    import.meta.env.VITE_GITHUB_REPO
  }`;

  const response = await api.get<IssuesResponse>(
    `/search/issues?q=${encodeURI(text)}repo:${repo}`
  );

  return response.data;
};
