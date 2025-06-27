"use client";

import { useDrag } from "@/lib/hooks/useDrag";
import { useGameState } from "@/lib/hooks/useGameState";
import { CommunityState } from "@/lib/types/community";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export const CommunitiesList = () => {
  const { communities } = useGameState();

  return (
    <div className="flex flex-col items-start w-full h-full px-6 justify-start">
      <ul className="grid grid-cols-2 gap-4">
        {communities.map((community) => (
          <DraggableCard key={community.id} community={community} />
        ))}
      </ul>
    </div>
  );
};

const DraggableCard = ({ community }: { community: CommunityState }) => {

  return (
    <li
      draggable={!community?.correct}
      onDragStart={(e) => {
        const data = {
          name: community?.name,
        };
        e.dataTransfer.setData("text/plain", JSON.stringify(data));
      }}
      className={cn(
        "flex items-center justify-between border rounded-sm bg-card px-4 py-2 ",
        community?.correct
          ? "border-green-500 bg-muted text-muted-foreground"
          : "cursor-grab"
      )}
    >
      {community?.name}
      {community?.correct && (
        <CheckIcon className="ml-2 h-5 w-5 text-green-500" />
      )}
    </li>
  );
};
