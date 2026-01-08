import { create } from "zustand";
import type { UserType } from "@/types";
import { mapper } from "@/lib/utils";
import { getLocalUsers, setLocalUsers } from "@/lib/local-user";

type UserStoreType = {
    apiUsers: UserType[];
    localUsers: UserType[];
    searchQuery: string;

    loading: boolean;
    error: string | null;

    fetchUsers: () => Promise<void>;
    addLocalUser: (user: UserType) => void;
    searchUsers: (query: string) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
    apiUsers: [],
    localUsers: getLocalUsers(),
    searchQuery: "",

    loading: false,
    error: null,

    fetchUsers: async () => {
        try {
            set({ loading: true, error: null });

            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data: unknown = await response.json();
            if (!data) throw new Error("Failed to fetch users");

            const users = mapper(data);
            set({ apiUsers: users });
        } catch (error) {
            set({ error: error instanceof Error ? error.message : "Failed to fetch users" });
        } finally {
            set({ loading: false });
        }
    },
    addLocalUser: (user: UserType) => {
        const updated = [...getLocalUsers(), user];
        set({ localUsers: updated });
        setLocalUsers(updated);
    },
    searchUsers: (query: string) => {
        set({ searchQuery: query });
    },
}))