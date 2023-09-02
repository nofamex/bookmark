import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Bookmark {
  title: string;
  url: string;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  add: (b: Bookmark) => void;
}

export const useBookmark = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarks: [],
      add: (b) => set((state) => ({ bookmarks: [...state.bookmarks, b] })),
    }),
    {
      name: "bookmarks-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
