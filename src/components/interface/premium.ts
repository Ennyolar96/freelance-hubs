export interface PremiumContextType {
  isPremium: boolean;
  activatePremium: () => void;
  premiumFeatures: string[];
}

export const premiumFeatures = [
  "Advanced Filters",
  "Job Alerts",
  "Priority Support",
  "Custom Categories",
];
