import { TiStarOutline } from "react-icons/ti";

import Image from "next/image";

function CryptoCard({ cryptoData }) {
  return (
    <ul className="flex flex-col ">
      {cryptoData.map((crypto, index) => (
        <li
          key={index}
          className=" grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]  grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center md:py-8 sm:py-4 py-3 border-b-[0.3px] rounded-sm border-b-slate-600"
        >
          <div className="flex items-center gap-x-1">
            <TiStarOutline className="sm:w-5 w-3 aspect-square hidden md:block" />
            <div className="relative sm:w-6 w-3 aspect-square">
              <Image
                src={crypto.image}
                fill
                className="object-cover"
                alt={crypto.name}
              />
            </div>
            <span className="sm:text-xs text-[8px] sm:font-[400] font-[300]">
              {crypto.name}
            </span>
            <span className="sm:text-sm text-[11px] text-slate-700 hidden md:block">
              {crypto.symbol.toUpperCase()}
            </span>
          </div>
          <div className=" sm:text-xs   !text-[8px]  ">
            ${crypto.current_price}
          </div>
          <div
            className={`${
              crypto.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            } text-base sm:text-xs !text-[8px]`}
          >
            {crypto.price_change_percentage_24h}
          </div>
          <div className="text-base sm:text-xs !text-[8px]">
            ${crypto.high_24h}
          </div>
          <div className="text-base sm:text-xs !text-[8px]">
            ${crypto.low_24h}
          </div>
          <div className="text-base sm:text-xs !text-[8px]">
            ${crypto.total_volume}
          </div>
          <div>
            <button className=" lg:text-sm  sm:text-xs text-[7px] md:px-4 sm:px-2 px-1  md:py-2  py-1 border-yellow-400 border-[.5px] rounded-full text-yellow-300">
              View details
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CryptoCard;
