"use client ";

function MarketOverview() {
  const marketOverview = [
    {
      hours: "last 24hrs",
      total: "$2.8%",
      market: "Crypto index",
    },
    {
      hours: "last 24hrs",
      total: "24",
      market: "Market Pair",
    },
    {
      hours: "last 24hrs",
      total: "500",
      market: "Cryptocurrency",
    },
    {
      hours: "last 24hrs",
      total: "50.3k",
      market: "Trading Volume",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="font-extrabold text-lg mb-8">Market Overview</h2>

      <ul className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-1 grid-rows-4  gap-x-4 gap-y-4">
        {marketOverview.map((item, i) => {
          return (
            <li
              key={i}
              className="px-6 py-4 flex gap-y-2 flex-col gap-x-2 items-center justify-center bg-[#000000c7] rounded-lg"
            >
              <h3 className="font-extralight text-xs ">{item.hours}</h3>
              <p
                className={`${
                  i === 0 ? "text-green-500" : ""
                } text-3xl font-bold`}
              >
                {item.total}
              </p>
              <p className="text-md font-light">{item.market}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MarketOverview;
