import Image from "next/image";
import SpotTradeHeader from "./SpotTradeHeader";
import { RiArrowDropDownLine } from "react-icons/ri";
import TradeChart from "./TradeChart";
import OrderBook from "./OrderBook";
import MarketTrade from "./MarketTrade";

function SpotTradeData() {
  return (
    <div className="h-auto">
      <div className="grid md:grid-cols-[1fr_6fr_3fr_3fr]  grid-cols-1  md:grid-rows-1 grid-rows-2 gap-x-2 gap-y-4">
        <div className="px-1 h-24 md:w-auto  py-4 flex md:flex-col flex-row gap-y-4 gap-x-2 md:items-center w-full justify-center bg-primary-3000 rounded-2xl ">
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-1.svg"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-2.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-3.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-4.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-5.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-8 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-6.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6 relative aspect-square cursor-pointer">
            <Image
              alt="trade"
              src="../spot-trade-icons/icon-7.svg"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-8.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-9.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-10.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-6 relative aspect-square cursor-pointer">
            <Image
              src="../spot-trade-icons/icon-11.svg"
              alt="trade"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="py-2 px-2 md:w-auto  flex flex-col  bg-primary-3000 rounded-2xl">
          <SpotTradeHeader />
          <div className="flex-1">
            <TradeChart />
          </div>
          <div className="grid grid-cols-12 gap-x-1 items-center  ">
            <button className="flex gap-x-[.8px] bg-yellow-500 text-black px-1 py-1 rounded-lg items-center text-xs">
              <span>Jan</span>
              <span>
                <RiArrowDropDownLine />
              </span>
            </button>
            <div className="text-xs">08/00</div>
            <div className="text-xs">08/01</div>
            <div className="text-xs">08/02</div>
            <div className="text-xs">08/03</div>
            <div className="text-xs">08/04</div>
            <div className="text-xs">08/05</div>
            <div className="text-xs">08/06</div>
            <div className="text-xs">08/07</div>
            <div className="text-xs">08/08</div>
            <div className="text-xs">08/09</div>
            <div className="text-xs">08/10</div>
          </div>
        </div>
        <OrderBook />
        <MarketTrade />
      </div>
    </div>
  );
}

export default SpotTradeData;
