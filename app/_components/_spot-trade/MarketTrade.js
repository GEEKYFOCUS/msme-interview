import { GoSearch } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import Image from "next/image";
export default function MarketTrade() {
  const tradeOrderArr = [
    { price: `20,3033`, amount: 10.323, total: 70.30922 },

    { price: `20,3033`, amount: 12.323, total: 30.30922 },
    { price: `30,3033`, amount: 40.323, total: 80.30922 },
    { price: `20,3033`, amount: 10.323, total: 70.30922 },
  ];

  const currencyCode = [
    {
      name: "USDT",
      value: "usdt",
    },
    {
      name: "USC",
      value: "usc",
    },
    {
      name: "TUSD",
      value: "tusd",
    },
    {
      name: "BUSD",
      value: "busd",
    },
    {
      name: "ALT",
      value: "alt",
    },
    {
      name: "FIAT",
      value: "fiat",
    },
  ];

  const marketTrade = [
    {
      star: <IoIosStarOutline />,
      currency: "BTC/USDT",
      price: "22,3332",
      change: 0.6,
    },
    {
      star: <IoIosStarOutline />,
      currency: "BTC/USDT",
      price: "29,2221",
      change: -0.6,
    },
    {
      star: <IoIosStarOutline />,
      currency: "BTC/USDT",
      price: "29,2332",
      change: 0.6,
    },
    {
      star: <IoIosStarOutline />,
      currency: "BTC/USDT",
      price: "29,2222",
      change: -0.6,
    },
  ];
  return (
    <div
      className="
    p-2 rounded-2xl bg-primary-3000 space-y-1"
    >
      <div className="flex gap-x-2">
        <button className="border-none outline-none bg-yellow-400 text-black font-[400] text-sm px-3 py-1 rounded-full">
          Market Trade
        </button>
        <button className="border-none outline-none bg-yellow-400 text-black font-[400] text-sm px-3 py-1 rounded-full">
          My Trade
        </button>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 bg-primary-2000 rounded-lg pl-3 pr-4 py-1">
        <div className="font-[300] text-white text-sm ">Price</div>
        <div className="font-[300] text-white text-sm ">Amount </div>
        <div className="font-[300] text-white text-sm ">Total</div>
      </div>

      <ul className="   pl-3 pr-4 py-1 space-y-1">
        {tradeOrderArr.map((history, i) => (
          <li key={i} className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 border-b-slate-700 border-b-[.1px] py-2">
            <div className="text-green-600 text-xs">{history.price}</div>
            <div className=" text-xs">{Number(history.amount)}</div>
            <div className="text-xs">{Number(history.total)}</div>
          </li>
        ))}
      </ul>

      <div className="flex relative items-center ">
        <span className="absolute left-2 ">
          <GoSearch className="text-sm" />
        </span>

        <input
          type="search"
          className=" my-2 pl-10 pr-4 py-1 w-56  text-primary-200 outline-none border-none bg-primary-2000 rounded-xl placeholder:text-sm placeholder:font-[400] "
          placeholder="Search Here..."
        />
      </div>
      <div className="flex gap-x-3 items-center">
        <IoIosStarOutline className="text-sm" />
        <div className="flex gap-x-2">
          {currencyCode.map((currency, i) => (
            <div key={i} className="text-xs">{currency.name}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 bg-primary-2000 rounded-lg pl-3 pr-4 py-1">
        <div className="font-[300] text-white text-sm flex gap-x-1">
          <span>Pair</span>
          <span className="relative h-4 w-2 ">
            <Image
              src="../trade/arrows.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <div className="font-[300] text-white text-sm  flex gap-x-1 ">
          <span>Price</span>
          <span className="relative h-4 w-2 ">
            <Image
              src="../trade/arrows.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <div className="font-[300] text-white text-sm flex  gap-x-1">
          <span>Change</span>
          <span className="relative h-4 w-2 ">
            <Image
              src="../trade/arrows.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
      </div>
      <div className="   pl-3 pr-4 ">
        <ul className="flex flex-col gap-y-2">
          {marketTrade.map((currency, index) => (
            <li key={index} className="grid grid-cols-[2fr_1fr_1fr] py-1 items-center">
              <div className="font-[400] text-white text-sm flex gap-x-1   ">
                <span>{currency.star}</span>
                <span>{currency.currency}</span>
              </div>
              <div className="font-light text-white text-xs">
                {currency.price}{" "}
              </div>
              <div
                className={` ${
                  Number(currency.change) > 0
                    ? "text-green-600"
                    : "text-red-500"
                }font-light text-xs  `}
              >
                {currency.change}%
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
{
  /* <ul className="   pl-3 pr-4 py-1 space-y-1">
        {tradeOrderArr.map((history, i) => (
          <li className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 border-b-slate-700 border-b-[.1px] py-2">
            <div className="text-red-600 text-xs">{history.price}</div>
            <div className=" text-xs">{Number(history.amount)}</div>
            <div className="text-xs">{Number(history.total)}</div>
          </li>
        ))}
      </ul> */
}
