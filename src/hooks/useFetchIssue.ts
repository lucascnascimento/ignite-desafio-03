import { useQuery } from "@tanstack/react-query";
import { fetchIssue } from "../api/issues";

export const useFetchIssue = (id: number) => {
  return useQuery(["issue", id], () => fetchIssue(id));
};
