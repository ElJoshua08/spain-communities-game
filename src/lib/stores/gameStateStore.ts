"use client";
import { CommunityState } from "@/lib/types/community";
import { GameState } from "@/lib/types/game";
import { create } from "zustand";

export const useGameStateStore = create<GameState>((set, get) => ({
  communities: [],
  setCommunities: (input) => {
    const next = typeof input === "function" ? input(get().communities) : input;
    set({ communities: next });
  },
  infoCardCommunity: undefined,
  setInfoCardCommunity: (community: CommunityState) => {
    set({ infoCardCommunity: community });
  },
}));
