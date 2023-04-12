import { fetchUsers } from "../api/users";
import { useQuery } from "@tanstack/react-query";

export const useFetchUser = (username: string) => {
  return useQuery(["user", username], () => fetchUsers(username));
};
