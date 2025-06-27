"use client";

import { CommunitiesList } from "@/components/communities-list";
import { Map } from "@/components/map";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { useGameState } from "@/lib/hooks/useGameState";

export default function EasyPage() {
  const { infoCardCommunity, communities } = useGameState();

  return (
    <section className="w-full items-center justify-center flex h-full">
      <div className="flex flex-row  gap-x-8 h-[600px] w-full items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Mapa de España</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-stretch justify-center h-full w-full p-32">
            <Map className="grow scale-150" />
          </CardContent>
          <CardFooter>
            <span className="font-semibold">
              {communities.filter((c) => c.correct).length} de{" "}
              {communities.length}
            </span>
          </CardFooter>
        </Card>

        <div className="gap-y-8 flex flex-col">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Comunidades Autonomas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-stretch justify-center h-full w-full pb-4">
              <CommunitiesList />
            </CardContent>
          </Card>

          {infoCardCommunity && (
            <Card className="animate-in fade-in-0">
              <CardHeader>
                <CardTitle className="text-lg">
                  {infoCardCommunity.name}
                </CardTitle>
                <CardDescription>{infoCardCommunity.funFact}</CardDescription>
              </CardHeader>

              <Separator />

              <CardContent>
                <span className="inline">
                  Capital en:{" "}
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <strong className="font-semibold underline cursor-pointer">
                        {infoCardCommunity.capital.name}
                      </strong>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <h2 className="text-left text-lg font-semibold">
                        {infoCardCommunity.capital.name}
                      </h2>
                      <p>{infoCardCommunity.capital.funFact}</p>
                    </HoverCardContent>
                  </HoverCard>
                </span>

                {infoCardCommunity.provinces.length > 1 && (
                  <ul className="grid grid-cols-3 gap-x-2 gap-y-2 items-center justify-center pl-4 pt-4">
                    {infoCardCommunity.provinces.map((province) => (
                      <li key={province} className="list-disc">
                        {province}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
