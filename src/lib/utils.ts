import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { UserType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const normalizeUrl = (url?: string) => {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};


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
      website: normalizeUrl(user.website),
      address: user.address,
      company: user.company,
    }))
};