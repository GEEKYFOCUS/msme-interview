import Category from "./_components/Category";
import MarketList from "./_components/MarketList";
import MarketOverview from "./_components/MarketOverview";
import Pagination from "./_components/Pagination";
import StartTrading from "./_components/StartTrading";

// import { useState } from "react";
export default async function Page() {
  return (
    <main className="py-8 px-4">
      <h4>
        Home &gt; <span className="font-bold ">Market</span>
      </h4>

      <MarketOverview />
      <Category />
      <MarketList />
      <Pagination />
      <StartTrading />
    </main>
  );
}
