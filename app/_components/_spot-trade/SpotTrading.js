"use client";
import Image from "next/image";
import { TbArrowsExchange2 } from "react-icons/tb";
import { useState, useEffect } from "react";

function SpotTrading() {
  const [spotData, setSpotData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // Fetch data from CoinGecko API

  useEffect(() => {
    const fetchSpotData = async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
        );

        const data = await response.json();
        console.log(data);
        setIsloading(false);
        setSpotData(data[0]);
        console.log(spotData);
      } catch (error) {
        setErrorMessage(error.message);
        setIsloading(false);
      }
    };
    fetchSpotData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (errorMessage)
    return <div className="text-center text-red-500">{errorMessage}</div>;
  return (
    <div className="pl-6 px-2 py-4 bg-primary-3000 rounded-lg">
      <div className="md:grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] flex   gap-x-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-row-[1fr_1fr] gap-x-2 ">
          <div className="relative md:w-8 w-4 aspect-square row-start-1 row-span-7 ">
            <Image
              src={spotData.image}
              alt="bitcoin image"
              quality={90}
              fill
              className=" md:w-12 w-6 object-contain "
            />
          </div>
          <h4 className="col-start-2 col-end-3 text-[7px] md:text-sm lg-text-base">
            {spotData?.symbol?.toUpperCase()}/USDT
          </h4>
          <span className="text-xs col-start-2 row-start-2 !translate-y-[-5px]  text-[7px] md:text-sm lg-text-base">
            {spotData.name}
          </span>
          <span className="text-[12px] md:text-sm lg-text-base">
            <TbArrowsExchange2 />
          </span>
        </div>
        <div className="flex flex-col gap-y-1 items-center text-[7px] md:text-sm lg-text-base">
          <h5 className="font-bold">{spotData.price_change_24h}</h5>
          <span className={` text-xs translate-y-[-4px]`}>
            {spotData.price_change_percentage_24h}%
          </span>
        </div>
        <div className="md:block hidden">&nbsp;</div>
        <div className="md:block hidden">&nbsp;</div>
        <div className="md:block hidden">&nbsp;</div>
        {/* <div>&nbsp;</div>
        <div>&nbsp;</div> */}
        <div className="flex flex-col items-center text-[7px] md:text-sm lg-text-base">
          <h6 className="text-[7px] md:text-sm lg-text-base text-slate-400 font-light">
            24hrs Change
          </h6>
          <div className="text-[7px] md:text-sm lg-text-base">
            <span>-182.32</span>
            <span>-0.61</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-[7px] md:text-sm lg-text-base">
          <h6 className="text-[7px] md:text-sm lg-text-base text-slate-400 font-light">
            24hrs high
          </h6>
          <span>{spotData.high_24h}</span>
        </div>
        <div className="flex flex-col items-center text-[7px] md:text-sm lg-text-base">
          <h6 className="text-[7px] md:text-sm lg-text-base text-slate-400 font-light">
            24hrs low
          </h6>
          <span>{spotData.low_24h}</span>
        </div>
        <div className="col-span-2  flex flex-col items-center text-[7px] md:text-sm lg-text-base">
          <h6 className="text-[7px] md:text-sm lg-text-base text-slate-400 font-light ">
            24hrs Volume(BTC)
          </h6>
          <span>{spotData.total_volume}</span>
        </div>
        <div className="col-span-2 flex flex-col items-center text-[7px] md:text-sm lg-text-base ">
          <h6 className="text-[7px] md:text-sm lg-text-base text-slate-400 font-light">
            24hrs Volume(USDT)
          </h6>
          <span>{spotData.total_supply}</span>
        </div>
        {/* <div>&nbsp;</div> */}
      </div>
    </div>
  );
}

export default SpotTrading;
