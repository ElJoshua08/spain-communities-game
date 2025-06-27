import { CommunityState } from "@/lib/types/community";

export type GameState = {
  communities: CommunityState[];
  setCommunities: (
    communities:
      | CommunityState[]
      | ((prev: CommunityState[]) => CommunityState[])
  ) => void;
  infoCardCommunity: CommunityState | undefined;
  setInfoCardCommunity: (community: CommunityState) => void;
};
