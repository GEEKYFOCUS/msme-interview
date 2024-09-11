import { MdOutlineArrowDropDown } from "react-icons/md";

import Image from "next/image";

export default function SpotTradeHeader() {
  return (
    <div className="md:grid md:grid-cols-[2fr_1fr_1fr]  flex flex-col gap-2 mb-2 md:mb-0 gap-x-4">
      <div className=" flex justify-center items-center gap-x-1  bg-primary-2000 rounded-full">
        <span className="text-xs ">1m</span>
        <span className="text-xs ">5m</span>
        <span className="text-xs ">15m</span>
        <span className="text-xs ">30m</span>
        <span className="text-xs ">1h</span>
        <span className="text-xs ">1h</span>
        <span className="text-xs ">12h</span>
        <span className="text-xs ">24h</span>
        <span className="text-xs ">1d</span>
        <span className="text-xs ">
          <MdOutlineArrowDropDown />
        </span>
      </div>
      <div className="flex justify-evenly bg-primary-2000 px-2 py-1  rounded-full">
        <div className="w-3 relative aspect-square cursor-pointer">
          <Image src="../trade/chart.svg"  alt="chart"fill className="object-contain" />
        </div>
        <div className="w-3 relative aspect-square cursor-pointer">
          <Image src="../trade/setting.svg"  alt="chart" fill className="object-contain" />
        </div>
        <div className="w-3 relative aspect-square cursor-pointer">
          <Image src="../trade/camera.svg"  alt="chart"  fill className="object-contain" />
        </div>
        <div className="w-3 relative aspect-square cursor-pointer">
          <Image src="../trade/arrow.svg"  alt="chart"  fill className="object-contain" />
        </div>
        <div className="w-3 relative aspect-square cursor-pointer">
          <Image src="../trade/star.svg"  alt="chart"  fill className="object-contain" />
        </div>
      </div>
      <div className="flex justify-between md:justify-normal   gap-x-2 bg-primary-2000  px-2 py-1 rounded-full">
        <button className="bg-yellow-400 text-black font-bold px-2 py-1 outline-none border-none rounded-full text-xs  ">
          Original
        </button>
        <button className="bg-yellow-400 text-black font-bold px-2 py-1 outline-none border-none rounded-full text-xs  ">
          Depth
        </button>
      </div>
    </div>
  );
}
