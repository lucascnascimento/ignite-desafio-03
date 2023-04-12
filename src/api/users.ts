import { User } from "../@types";
import { api } from "./config";

export const fetchUsers = async (username: string) => {
  const response = await api.get<User>(`/users/${username}`);

  return response.data;
};
