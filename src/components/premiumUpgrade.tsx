// src/components/PremiumUpgrade.tsx
import React from "react";
import { usePremium } from "../provider/premiumContext";

const PremiumUpgrade: React.FC = () => {
  const { isPremium, activatePremium, premiumFeatures } = usePremium();

  if (isPremium) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-4">
        <div className="flex items-center">
          <span className="text-xl mr-2">🌟</span>
          <h3 className="font-bold text-lg">Premium Member</h3>
        </div>
        <p className="mt-2 text-sm">
          Thank you for supporting Freelance Finder!
        </p>
      </div>
    );
  }

  return (
    <div className="border border-yellow-400 rounded-lg p-4 mb-4 bg-yellow-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg flex items-center">
            <span className="mr-2">✨</span> Upgrade to Premium
          </h3>
          <p className="text-sm mt-1 text-gray-700">
            Unlock powerful features:
          </p>
          <ul className="mt-2 text-sm space-y-1">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-green-500">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={activatePremium}
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Upgrade
        </button>
      </div>
      <p className="mt-3 text-xs text-gray-600">
        Only $3.99/month - Cancel anytime
      </p>
    </div>
  );
};

export default PremiumUpgrade;
