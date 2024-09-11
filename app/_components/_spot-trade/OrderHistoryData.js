"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
function OrderHistoryData() {
  const [orderType, setOrderType] = useState("openOrder");
  const orderHistory = [
    {
      id: 1,
      date: "2023-01-01",
      pair: "BTC/USDT",
      type: "Limit",
      side: "Buy",
      price: 10.222,
      amount: 12.223,
      filled: 12.332,
      total: 123320,
    },
  ];

  return (
    <div className="row-span-2  bg-primary-3000 p-3 rounded-2xl space-y-6 h-auto">
      <div className="flex gap-x-2">
        <div className="flex gap-x-3 bg-primary-2000  rounded-xl w-[70%] p-2">
          <button
            value="openOrder"
            onClick={(e) => setOrderType(e.target.value)}
            className={`text-xs    outline-none border-none  md:px-4 px-2 py-1 md:text-sm  rounded-full ${
              orderType === "openOrder"
                ? "text-black md:font-[500] font-[300] bg-yellow-400   "
                : "text-white "
            }}`}
          >
            Open Order
          </button>
          <button
            value="orderHistory"
            onClick={(e) => setOrderType(e.target.value)}
            className={`text-xs    outline-none border-none  md:px-4 px-2 py-1 md:text-sm  rounded-full ${
              orderType === "orderHistory"
                ? "text-black font-[500] bg-yellow-400   "
                : "text-white "
            }}`}
          >
            Order History
          </button>
          <button
            value="tradeOrder"
            onClick={(e) => setOrderType(e.target.value)}
            className={`text-xs    outline-none border-none  md:px-4 px-2 py-1 md:text-sm  rounded-full ${
              orderType === "tradeOrder"
                ? "text-black font-[500] bg-yellow-400   "
                : "text-white "
            }}`}
          >
            Trade History
          </button>
        </div>
        <div className="">
          <button className=" flex items-center gap-x-2 rounded-xl bg-yellow-400 text-black font-[400] outline-none border-none px-4 py-3">
            <span>Spot</span> <RiArrowDropDownLine />
          </button>
        </div>
      </div>

      <div className="bg-primary-2000  rounded-xl items-center  pl-3 pr-2  py-2 grid grid-cols-9 gap-x-1">
        <div className="text-[8px] md:text-sm font-[300]">Time</div>
        <div className="text-[8px] md:text-sm font-[300] flex gap-x-1 items-center">
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
        <div className="text-[7px] md:text-sm font-[300] flex gap-x-1 items-center">
          <span>All Type</span>
          <span className="relative md:h-4 md:w-2 ">
            <Image
              src="../trade/arrows.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <div className="text-[8px] md:text-smfont-[300] flex gap-x-1 items-center">
          <span>Side</span>
          <span className="relative h-4 w-2 ">
            <Image
              src="../trade/arrows.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <div className="text-[8px] md:text-sm font-[300] flex gap-x-1 items-center">
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
        <div className="text-[8px] md:text-sm font-[300]">Amount</div>
        <div className="text-[8px] md:text-sm font-[300]">Filled</div>
        <div className="text-[8px] md:text-sm font-[300]">Total</div>
        <div className="text-[8px] md:text-sm  font-[300] flex md:gap-x-2 gap-x-1">
          <span className="relative  md:w-3 w-3 aspect-square items-center ">
            <Image
              src="../trade/trash.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
          <span className="text-red-600 text-[7px] md:text-sm">Clear All</span>
        </div>
      </div>

      <div>
        <ul>
          {Array.from({ length: 15 }, (el, index) => (
            <li
              key={index}
              className="border-b-slate-800 border-b-[.5px]  pl-3 pr-2  py-4 grid grid-cols-9 gap-x-2"
            >
              <div className="text-[6px] md:text-sm">2023-01-01</div>
              <div className="text-[8px] md:text-sm">BTC/USDT</div>
              <div className="text-[8px] md:text-sm">Limit </div>
              <div
                className={`${
                  index % 2 === 0 ? "text-green-600" : "text-red-500"
                }   text-[8px] md:text-sm`}
              >
                {index % 2 === 0 ? "Buy" : "Sell"}
              </div>
              <div className="text-[8px] md:text-sm">12.234BTC</div>
              <div className="text-[8px] md:text-sm">12.234BTC</div>
              <div className="text-[8px] md:text-sm">12.234BTC</div>
              <div className="text-[8px] md:text-sm">12.234BTC</div>
              <div></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderHistoryData;
