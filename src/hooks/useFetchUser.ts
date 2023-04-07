import { getUsers } from "../api/users";
import { useQuery } from "@tanstack/react-query";

export const useFetchUser = (username: string) => {
  return useQuery(["user", username], () => getUsers(username));
};
