"use client";
import { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
function SellBtc() {
  const [market, setMarket] = useState("limit");
  console.log(market);

  const buttonTypes = [
    { type: 5, value: 5 },
    { type: 15, value: 10 },
    { type: 25, value: 25 },
    { type: 50, value: 50 },
    { type: 70, value: 70 },
    { type: 90, value: 90 },
    { type: 100, value: 100 },
    { type: 0, value: 0 },
  ];
  return (
    <div className="bg-primary-3000 px-4 py-4 rounded-2xl flex flex-col ">
      <h2 className="text-yellow-400 font-bold text-lg  mb-4">Sell BTC</h2>
      <div className="flex gap-x-2 px-4 py-2   bg-primary-1000 rounded-xl">
        <button
          value="limit"
          onClick={(e) => setMarket(e.target.value)}
          className={`text-sm outline-none  border-none px-6 py-1 rounded-full ${
            market === "limit"
              ? "bg-yellow-400 text-primary-2000"
              : " text-white"
          }`}
        >
          Limit
        </button>
        <button
          value="market"
          onClick={(e) => setMarket(e.target.value)}
          className={`text-sm outline-none  border-none px-6 py-1 rounded-full ${
            market === "market"
              ? "bg-yellow-400 text-primary-2000"
              : " text-white"
          }`}
        >
          Market
        </button>
        <button
          value="stopLimit"
          onClick={(e) => setMarket(e.target.value)}
          className={`text-sm outline-none  border-none px-6 py-1 rounded-full ${
            market === "stopLimit"
              ? "bg-yellow-400 text-primary-2000"
              : " text-white"
          }`}
        >
          Stop Limit
        </button>
      </div>
      <div
        className={`bg-primary-2000 px-4 py-2 flex justify-between rounded-xl mt-6 ${
          market === "stopLimit" ? "hidden" : "block"
        }`}
      >
        <span>Price</span>
        <span className="text-yellow-400 font-[300] text-sm">USDT</span>
      </div>
      <div
        className={` bg-primary-2000 px-4 py-2 flex justify-between rounded-xl mt-6 ${
          market === "stopLimit" ? "block" : "hidden"
        }`}
      >
        <span>Stop</span>
        <span className="text-yellow-400 font-[300] text-sm">BTC</span>
      </div>
      <div
        className={` bg-primary-2000 px-4 py-2 flex justify-between rounded-xl mt-6 ${
          market === "stopLimit" ? "block" : "hidden"
        }`}
      >
        <span>Limit</span>
        <span className="text-yellow-400 font-[300] text-sm">
          <span className="text-white">29221,22</span> BTC
        </span>
      </div>

      <div className="bg-primary-2000 px-4 py-2 flex justify-between  rounded-xl mt-6">
        <span className="text-sm">
          {market === "stopLimit" ? "Total" : "Quantity"}
        </span>
        <span className="text-yellow-400 font-[300] text-sm">BTC</span>
      </div>

      <div className=" grid grid-cols-8 gap-x-2 mt-4">
        {buttonTypes.map((buttonType) => (
          <button
            key={buttonType.type}
            className={`text-xs outline-none text-black border-none px-2 py-1 rounded-md bg-yellow-400 `}
          >
            {buttonType.value}%
          </button>
        ))}
      </div>
      <div
        className={`flex gap-x-2 justify-end mt-4 items-center ${
          market === "limit" ? "block " : "hidden"
        } `}
      >
        <div className="text-sm text-yellow-500">Available Balance:</div>

        <button className="flex gap-x-3 bg-primary-2000 px-2 py-1 rounded-lg items-center text-sm">
          <span>USDT</span>
          <span>
            <RiArrowDropDownLine />
          </span>
        </button>
      </div>
      <div
        className={`flex gap-x-2 justify-end mt-4 items-center ${
          market === "limit" ? "block " : "hidden"
        } `}
      >
        <div className="text-sm text-yellow-500">Volume:</div>

        <div className="flex gap-x-3  px-2 py-1 rounded-lg items-center text-sm">
          <span>00.00</span>
        </div>
      </div>

      <div className="flex flex-col items-end ">
        <button className="self-stretch   bg-yellow-400 text-xs outline-none border-none text-black  px-4 py-2 mt-4 rounded-xl w-full">
          Login Or Sign Up To Start Trading
        </button>
      </div>
    </div>
  );
}

export default SellBtc;
