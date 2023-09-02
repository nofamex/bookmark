import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Bookmark {
  id: string;
  title: string;
  url: string;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  add: (b: Bookmark) => void;
  delete: (b: Bookmark) => void;
}

export const useBookmark = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarks: [],
      add: (b) => set((state) => ({ bookmarks: [...state.bookmarks, b] })),
      delete: (b) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((v) => {
            return v.id !== b.id;
          }),
        })),
    }),
    {
      name: "bookmarks-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
