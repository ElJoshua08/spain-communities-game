"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MAP_PATHS } from "@/lib/constants/map-paths";
import { useDrag } from "@/lib/hooks/useDrag";
import { useGameState } from "@/lib/hooks/useGameState";
import { CommunityState } from "@/lib/types/community";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Map = ({ ...props }: HTMLAttributes<SVGElement> & {}) => {
  const { communities } = useGameState();

  return (
    <svg width="380" height="281" viewBox="350 0 155 281" {...props}>
      <g clipPath="url(#clip0_18_2)">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_18_2">
          <rect width="620" height="281" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CommunityCard = ({ community }: { community: CommunityState }) => {
  const { setInfoCardCommunity, onCorrectDrop } = useGameState();
  const { isDragging } = useDrag();

  function handleDrop(e: React.DragEvent<SVGPathElement>) {
    if (!community) {
      return null;
    }

    e.preventDefault();
    if (community.correct) return;

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (data.name === community.name) {
      onCorrectDrop(community.id);
    }
  }

  return (
    <Tooltip delayDuration={10}>
      <TooltipTrigger asChild>
        <path
          d={MAP_PATHS[community.id]}
          fill={community.correct ? community.color : "#8a8a8a"}
          onDragOver={(e) => {
            e.preventDefault(); // Necesario para que `onDrop` funcione
          }}
          onDrop={handleDrop}
          onClick={() => {
            if (community.correct) {
              setInfoCardCommunity(community);
            };
          }}
          stroke="#212121"
          strokeWidth="0.72"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(isDragging ? "cursor-grab" : "cursor-pointer")}
        />
      </TooltipTrigger>
      {community.correct && (
        <TooltipContent className="text-balance text-lg max-w-[60ch]">
          Haz click para ver datos sobre esta comunidad autonoma
        </TooltipContent>
      )}
    </Tooltip>
  );
};
