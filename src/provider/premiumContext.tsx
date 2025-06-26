import { useState, type ReactNode } from "react";
import { PremiumContext } from "./context";
import { premiumFeatures } from "../components/interface";

export const PremiumProvider = ({ children }: { children: ReactNode }) => {
  const [isPremium, setIsPremium] = useState(false);

  const activatePremium = () => {
    setIsPremium(true);
  };

  return (
    <PremiumContext.Provider
      value={{ isPremium, activatePremium, premiumFeatures }}
    >
      {children}
    </PremiumContext.Provider>
  );
};
