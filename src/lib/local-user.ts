import type { UserType } from "@/types";

const KEY = "local_users";

export const getLocalUsers = (): UserType[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const setLocalUsers = (users: UserType[]) => {
  localStorage.setItem(KEY, JSON.stringify(users));
};
