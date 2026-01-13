import { useUserStore } from "@/store/store";
import type { UserType } from "@/types";

export const filteredUsersByNameOrEmail = () => {
  const { apiUsers, localUsers, searchQuery, loading } = useUserStore();
  const users = loading ? [] : localUsers; // just to avoid rendering of localUsers when loading
  const allUsers = [...apiUsers, ...users];
  const query = searchQuery.toLowerCase().trim();

  if (query === '') return allUsers.sort((a, b) => a.name.localeCompare(b.name)); // sort users alphabetically

  return allUsers.filter((user: UserType) => {
    return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
  }).sort((a, b) => a.name.localeCompare(b.name)); // sort filtered users alphabetically
}