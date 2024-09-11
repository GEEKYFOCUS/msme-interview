import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
export default function OrderBook() {
  const tradeOrderArr = [
    { price: `20,3033`, amount: 10.323, total: 70.30922 },

    { price: `20,3033`, amount: 12.323, total: 30.30922 },
    { price: `30,3033`, amount: 40.323, total: 80.30922 },
    { price: `20,3033`, amount: 10.323, total: 70.30922 },
    { price: `9,3033`, amount: 50.323, total: 60.30922 },
  ];
  return (
    <div className="p-2 rounded-2xl bg-primary-3000 space-y-1 ">
      <div className="flex items-center gap-x-3 justify-evenly">
        <h5>Order Book </h5>
        <div className="grid grid-cols-3 grid-rows-2 gap-[2px] ">
          <button className="w-4 h-2  rounded-full bg-green-600  outline-none border-none"></button>
          <button className="w-4 h-2 rounded-full bg-green-600  outline-none border-none"></button>
          <button className="w-4 h-2 rounded-full bg-black  outline-none border-none"></button>
          <button className="w-4 h-2 rounded-full bg-red-600  outline-none border-none"></button>
          <button className="w-4 h-2 rounded-full   bg-black outline-none border-none"></button>
          <button className="w-4 h-2 rounded-full   bg-red-600 outline-none border-none"></button>
        </div>
        <div className="flex gap-x-3 bg-primary-2000 px-2 py-1 rounded-lg items-center">
          <span>10</span>
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 bg-primary-2000 rounded-lg pl-3 pr-4 py-1">
        <div className="font-[300] text-white text-sm ">Price</div>
        <div className="font-[300] text-white text-sm ">Amount </div>
        <div className="font-[300] text-white text-sm ">Total</div>
      </div>

      <ul className="   pl-3 pr-4 py-1 space-y-1">
        {tradeOrderArr.map((history, i) => (
          <li
            key={i}
            className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 border-b-slate-700 border-b-[.1px] py-2"
          >
            <div className="text-green-600 text-xs">{history.price}</div>
            <div className=" text-xs">{Number(history.amount)}</div>
            <div className="text-xs">{Number(history.total)}</div>
          </li>
        ))}
      </ul>
      <div className="bg-primary-2000 rounded-lg px-4 py-2  flex gap-x-4">
        <div className=" flex ">
          <span>29,349.7 </span>
          <span className="relative h-4 w-2 ">
            <Image
              src="../trade/trade-arr.svg"
              alt="trade-arrow-up"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <span className="text-[10px] text-green-600 py-2">29,726.93 USD</span>
      </div>
      <ul className="   pl-3 pr-4 py-1 space-y-1">
        {tradeOrderArr.map((history, i) => (
          <li
            key={i}
            className="grid grid-cols-[2fr_1fr_1fr] gap-x-3 border-b-slate-700 border-b-[.1px] py-2"
          >
            <div className="text-red-600 text-xs">{history.price}</div>
            <div className=" text-xs">{Number(history.amount)}</div>
            <div className="text-xs">{Number(history.total)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
