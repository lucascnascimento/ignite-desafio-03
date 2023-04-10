import { useQuery } from "@tanstack/react-query";
import { searchIssues } from "../api/search";

export const useSearchIssues = (text: string) => {
  return useQuery(["issues", text], () => searchIssues(text));
};
