"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
function Category() {
  const [setSearchParams] = useSearchParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategory = searchParams?.get("category") || "all"; // Default to 'all'

  // Handle category click
  const handleCategoryClick = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value); // Set the selected category
    router.replace(`?${params.toString()}`);
  };

  const category = [
    { option: "All", value: "all" },
    { option: "Trending", value: "trending" },
    { option: "Gainer", value: "gainer" },
    { option: "Loser", value: "loser" },
    { option: "Payment", value: "payment" },
    { option: "Best buy", value: "best-buy" },
    { option: "Best sell", value: "best-sell" },
    { option: "NFTs", value: "nfts" },
    { option: "Stablecoin", value: "stablecoin" },
    { option: "Staking", value: "staking" },
    { option: "DeFi", value: "deFi" },
    { option: "Portfolio", value: "portfolio" },
    { option: "Watchlist ⭐", value: "watchlist" },
  ];

  return (
    <Suspense>
      <div className="mt-12">
        <div className="grid md:grid-cols-8 grid-cols-4 gap-4">
          {category.map((cat, index) => (
            <div
              key={index}
              className={`cursor-pointer px-2 py-2 text-xs md:text-base text-center rounded-lg ${
                currentCategory === cat.value
                  ? "bg-yellow-500 text-black"
                  : "bg-primary-2000 text-white"
              }`}
              onClick={() => handleCategoryClick(cat.value)}
            >
              {cat.option}
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Category;
