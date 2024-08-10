"use client";
import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

// Определяем массивы с функциями
const includedFeaturesFirstTier = [
  "AD free using",
  "Faster responses",
  "New commands",
  "Statistic features",
];

const includedFeaturesSecondTier = [
  "1 Tier Membership features",
  "AI access",
  "Entry to annual conference",
  "Official member t-shirt",
];

const includedFeaturesThirdTier = [
  "1 Tier Membership features",
  "AI access",
  "Entry to annual conference",
  "Official member t-shirt",
];

interface PricingCardProps {
  tier: string;
  features: string[];
  priceMonthly: string;
  priceYearly: string;
  isYearly: boolean;
  onSwitch: (isYearly: boolean) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, features, priceMonthly, priceYearly, isYearly, onSwitch }) => {
  return (
    <div className={`mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none transition-transform duration-300 ${isYearly ? 'transform scale-105' : ''}`}>
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {tier} Membership
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
          amet indis perferendis blanditiis repellendus etur quidem
          assumenda.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            What’s included
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          {features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                aria-hidden="true"
                className="h-6 w-5 flex-none text-indigo-600"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="relative rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 ${!isYearly ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-l-md`}
                onClick={() => onSwitch(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 ${isYearly ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-r-md`}
                onClick={() => onSwitch(true)}
              >
                Yearly
              </button>
            </div>
            <p className="text-base font-semibold text-gray-600">
              {isYearly ? 'Pay once, enjoy for a long time' : 'Pay once, enjoy for month'}
            </p>
            <div className="relative mt-6 flex items-baseline justify-center gap-x-2">
              {isYearly ? (
                <>
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {priceYearly}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400 line-through">
                    {priceMonthly}
                  </span>
                </>
              ) : (
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  {priceMonthly}
                </span>
              )}
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                {isYearly ? 'USD/YEAR' : 'USD/MONTH'}
              </span>
            </div>
            <a
              href="#"
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get access
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Price() {
  const [selectedYearlyCard, setSelectedYearlyCard] = useState<string | null>(null);

  const handleSwitchYearly = (tier: string | null) => {
    setSelectedYearlyCard(tier);
  };

  return (
    <div className="bg-white pb-24 sm:pb-[.5rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>

        <PricingCard
          tier="1 Tier"
          features={includedFeaturesFirstTier}
          priceMonthly="$3.99"
          priceYearly="$40.99"
          isYearly={selectedYearlyCard === '1 Tier'}
          onSwitch={(isYearly) => handleSwitchYearly(isYearly ? '1 Tier' : null)}
        />

        <PricingCard
          tier="2 Tier"
          features={includedFeaturesSecondTier}
          priceMonthly="$7.99"
          priceYearly="$81.99"
          isYearly={selectedYearlyCard === '2 Tier'}
          onSwitch={(isYearly) => handleSwitchYearly(isYearly ? '2 Tier' : null)}
        />

        <PricingCard
          tier="3 Tier"
          features={includedFeaturesThirdTier}
          priceMonthly="$13.99"
          priceYearly="$142.99"
          isYearly={selectedYearlyCard === '3 Tier'}
          onSwitch={(isYearly) => handleSwitchYearly(isYearly ? '3 Tier' : null)}
        />
      </div>
    </div>
  );
}

export default Price;
