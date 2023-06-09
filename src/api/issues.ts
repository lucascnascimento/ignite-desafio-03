import { IssueResponse } from "../@types";
import { api } from "./config";

export const fetchIssue = async (id: number) => {
  const repo = `${import.meta.env.VITE_USERNAME}/${
    import.meta.env.VITE_GITHUB_REPO
  }`;

  const response = await api.get<IssueResponse>(`/repos/${repo}/issues/${id}`);

  return response.data;
};
