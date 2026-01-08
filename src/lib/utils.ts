import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { UserType } from "@/types";
import { useUserStore } from "@/store/store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mapper = (users: unknown): UserType[] => {
  if (!Array.isArray(users)) {
    throw new Error("Invalid API response");
  }

  return users
    .map((user: any): UserType => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: user.address,
      company: user.company,
    }))
};

export const filteredUsersByNameOrEmail = () => {
  const { apiUsers, localUsers, searchQuery, loading } = useUserStore();
  const users = loading ? [] : localUsers; // just to avoid rendering of localUsers when loading
  const allUsers = [...apiUsers, ...users];
  const query = searchQuery.toLowerCase();

  if (query === '') return allUsers.sort((a, b) => a.name.localeCompare(b.name)); // sort users alphabetically

  return allUsers.filter((user: UserType) => {
    return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
  }).sort((a, b) => a.name.localeCompare(b.name)); // sort filtered users alphabetically
}