"use client";

import EasyPage from "@/app/jugar/facil/page";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const AVATAR_IMAGE_URL =
  "https://scontent-mad2-1.cdninstagram.com/v/t51.2885-19/496947462_17964150947912507_3545583258166469202_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-mad2-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QGTc69XC4TLA41tUHHkxEh8wudDrUAFXBv-_MVGGUXsWroGwj8WsODR0MvsEq3Ge7s&_nc_ohc=TxrzJGXh2QIQ7kNvwFA8QfU&_nc_gid=BBPasRawYu6YGTTRnHM2XQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfMTBTyfQwlS2Jm8yjG2BnIC4pOoFoRwa-rW-TB8H6xj0w&oe=68605CEA&_nc_sid=8b3546";
const ACCOUNT_URL = "https://www.instagram.com/el_.joshua/";

export default function RootPage() {
  return (
    <main className="flex flex-col items-center justify-start gap-x-6 w-full h-dvh">
      <nav className="w-full flex items-center justify-center py-8">
        <h1 className="font-header text-5xl">
          Comunidades y provincias -{" "}
          <strong className="text-primary">España</strong>
        </h1>
      </nav>

      <EasyPage />

      <footer className="w-full items-center justify-end flex p-6">
        <span className="inline-flex items-center gap-x-4 font-semibold">
          Hecho con ❤️ por{" "}
          <HoverCard openDelay={20} closeDelay={20}>
            <div className="flex items-center gap-3">
              <div className="space-y-0.5">
                <HoverCardTrigger asChild>
                  <Image
                    className="shrink-0 rounded-full cursor-pointer"
                    src={AVATAR_IMAGE_URL}
                    width={35}
                    height={35}
                    alt="Avatar"
                  />
                </HoverCardTrigger>
              </div>
            </div>
            <HoverCardContent align="end" side="left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image
                    className="shrink-0 rounded-full"
                    src={AVATAR_IMAGE_URL}
                    width={40}
                    height={40}
                    alt="Avatar"
                  />
                  <div>
                    <p className="text-sm font-medium">Josué Díaz</p>
                    <a
                      className="text-muted-foreground text-xs hover:underline hover:text-card-foreground transition-colors "
                      href={ACCOUNT_URL}
                    >
                      @el_.joshua
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Desarrollador front-end y designer :)
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </span>
      </footer>
    </main>
  );
}
