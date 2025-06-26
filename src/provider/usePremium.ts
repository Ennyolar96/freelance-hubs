import { useContext } from "react";
import type { PremiumContextType } from "../components/interface";
import { PremiumContext } from "./context";

export const usePremium = (): PremiumContextType => {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error("usePremium must be used within a PremiumProvider");
  }
  return context;
};
