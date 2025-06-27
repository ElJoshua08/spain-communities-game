"use client";

import { COMMUNITIES } from "@/lib/constants/communities";
import { useGameStateStore } from "@/lib/stores/gameStateStore";
import { CommunityState } from "@/lib/types/community";
import { getRandomVividHexColor } from "@/lib/utils";
import { useEffect } from "react";

export const useGameState = () => {
  const communities = useGameStateStore((state) => state.communities);
  const infoCardCommunity = useGameStateStore(
    (state) => state.infoCardCommunity
  );
  const setInfoCardCommunity = useGameStateStore(
    (state) => state.setInfoCardCommunity
  );
  const setCommunities = useGameStateStore((state) => state.setCommunities);

  useEffect(() => {
    setCommunities(
      COMMUNITIES.map((c) => ({
        ...c,
        correct: false,
        color: getRandomVividHexColor(),
      }))
    );
  }, []);

  const onCorrectDrop = (communityId: CommunityState["id"]) => {
    setCommunities((prev) =>
      prev.map((c) =>
        c.id === communityId && !c.correct ? { ...c, correct: true } : c
      )
    );

    const community = communities.find((c) => c.id === communityId);
    setInfoCardCommunity(community as CommunityState);
  };

  return {
    communities,
    setCommunities,
    onCorrectDrop,
    infoCardCommunity,
    setInfoCardCommunity,
  };
};
