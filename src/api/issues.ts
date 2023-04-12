import { SearchResponse } from "../@types";
import { api } from "./config";

export const fetchIssue = async (id: number) => {
  const repo = `${import.meta.env.VITE_USERNAME}/${
    import.meta.env.VITE_GITHUB_REPO
  }`;

  const response = await api.get<SearchResponse>(`/repos/${repo}/issues/${id}`);

  return response.data;
};
