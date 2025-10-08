// store/useTagStore.ts
"use client";
import { create } from "zustand";

type Tag = { _id: string; name: string };

interface TagState {
  tags: Tag[];
  activeTag: string | null;
  setTags: (tags: Tag[]) => void;
  setActiveTag: (id: string | null) => void;
}

export const useTagStore = create<TagState>((set) => ({
  tags: [],
  activeTag: null,
  setTags: (tags) => set({ tags }),
  setActiveTag: (id) => set({ activeTag: id }),
}));
