"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { TbCaretUpDownFilled } from "react-icons/tb";
import Crypto from "./Crypto";
import Pagination from "./Pagination";
export default function MarketList() {
  const marketListCurrency = [
    { name: "USD", currencyCode: "USD" },
    { name: "BTC", currencyCode: "BTC" },
    { name: "BUSD", currencyCode: "BUSD" },
    { name: "USC", currencyCode: "USC" },
    { name: "USDT", currencyCode: "USDT" },
    { name: "INR", currencyCode: "INR" },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategory = searchParams?.get("currencyCode") || "USD"; // Default to 'all'

  // Handle category click
  const handleCategoryClick = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("currencyCode", value); // Set the selected category
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="mt-12">
      <div className="md:flex md:justify-between md:items-center md:gap-x-4 gap-4 grid grid-cols-[2fr_3fr_1fr] grid-rows-[1fr_1fr]">
        <div>
          <h2 className="lg:text-2xl md:text-lg  text-md lg:font-bold font-[400] text-gray-300 col-start-1 -col-end-1">
            All Market List
          </h2>
          <p className=" text-gray-700 font-light text-xs">
            Stay updated with Tulupay market list{" "}
          </p>
        </div>

        <div className="flex bg-black px-2 sm:py-2 py-2 sm:gap-x-1 gap-x-[.9px] rounded-full row-start-2">
          {marketListCurrency.map((market, index) => (
            <button
              key={index}
              className={`outline-none lg:px-6 lg:py-1 md:px-4 md:py-[2px] px-2 py-[1px] md:text-sm sm:text-xs text-[7px]  rounded-full   ${
                currentCategory === market.currencyCode
                  ? "bg-yellow-500 text-black"
                  : "bg-primary-2000 text-white"
              }`}
              onClick={() => handleCategoryClick(market.currencyCode)}
            >
              {market.name}
            </button>
          ))}
        </div>

        <div className="flex relative items-center row-start-2">
          <span className="absolute left-2 text-xs sm:text-sm ">
            <GoSearch />
          </span>

          <input
            type="search"
            className="lg:pl-10 sm:pl-8 pl-7     lg:pr-4 pr-2 py-2 sm:py-3  lg:py-4 lg:w-56 sm:w-48 w-32  text-primary-200 outline-none border-none bg-black rounded-full sm:placeholder:text-sm placeholder:text-[10px] placeholder:font-[400] "
            placeholder="Search Market"
          />
        </div>
      </div>
      <div className="my-4 w-full lg:px-6 lg:py-4 md:px-3 md:py-2 px-2 py-2   bg-black rounded-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] sm:gap-x-3 gap-x-1  md:grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-center">
        <div className="sm:text-xs text-[9px] lg:text-base">Asset</div>
        <div className="flex items-center">
          <span className="sm:text-xs  text-[9px] lg:text-base">Price</span>{" "}
          <span className="sm:ml-[.4px]">
            <TbCaretUpDownFilled className="sm:text-xs text-[8px] lg:text-base" />
          </span>
        </div>
        <div className="flex items-center  sm:text-xs text-[9px] lg:text-base">
          <span className="sm:text-xs text-[7px] lg:text-base">
            24hrs Change
          </span>
          <span className="sm:ml-[.4px]">
            <TbCaretUpDownFilled className="sm:text-xs text-[6px] lg:text-base" />
          </span>
        </div>
        <div className="flex items-center sm:text-xs text-[9px] lg:text-base">
          <span className="sm:text-xs text-[7px] lg:text-base">24hrs high</span>
          <span className="sm:ml-[.4px]">
            <TbCaretUpDownFilled className="sm:text-xs text-[6px] lg:text-base" />
          </span>
        </div>
        <div className="flex items-center sm:text-xs text-[9px] lg:text-base">
          <span className="sm:text-xs text-[7px] lg:text-base">24hrs low</span>
          <span className="sm:ml-[.4px]">
            <TbCaretUpDownFilled className="sm:text-xs text-[6px] lg:text-base" />
          </span>
        </div>

        <div className="flex items-center sm:text-xs text-[9px] lg:text-base">
          <span className="sm:text-xs text-[7px] lg:text-base">
            volume(24hrs)
          </span>
          <span className="sm:ml-[.4px]">
            <TbCaretUpDownFilled className="sm:text-xs text-[6px] lg:text-base" />
          </span>
        </div>
        <div className=" pl-6 sm:text-xs text-[9px] lg:text-base">Action</div>
      </div>
      <Crypto />
      {/* <Pagination /> */}
    </div>
  );
}
