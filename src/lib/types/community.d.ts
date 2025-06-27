import { MAP_PATHS } from "@/lib/constants/map-paths";

export type Province = string;

export type Capital = {
  name: string;
  population?: number;
  funFact?: string;
};

export type Community = {
  id: keyof typeof MAP_PATHS;
  name: string;
  capital: Capital;
  provinces: Province[];

  funFact?: string;
  regionType?: "island" | "mainland";
};
export type CommunityState = Community & {
  correct: boolean;
  color: string;
};
