import { createContext } from "react";
import type { PremiumContextType } from "../components/interface";

export const PremiumContext = createContext<PremiumContextType | undefined>(
  undefined
);
