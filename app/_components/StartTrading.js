import Image from "next/image";
import image1 from "@/public/startTradeMap1.png";
import image2 from "@/public/startTradeMap2.png";
function StartTrading() {
  return (
    <div className="my-12 overflow-hidden">
      <div className="w-full h-[20rem] bg-black rounded-xl relative">
        <div className="  absolute top-[-10px] right-[-20px] sm:block hidden">
          <Image
            src={image2}
            alt="trading-image"
            placeholder="blur"
            quality={100}
            className=" object-contain w-full h-[16rem]  "
          />
        </div>
        <div className=" z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="md:font-bold font-[400] lg:text-4xl md:text-2xl sm:text-xl text-md ">
            We make trading <br /> Convenient for you!
          </h1>
          <button className="  border-none font-[600] sm:font-bold sm:text-base text-sm cursor-pointer outline-none md:px-8  px-6 sm:py-2 py-1 bg-yellow-500 rounded-lg text-black mt-4">
            Start trading
          </button>
        </div>

        <div className=" absolute bottom-[-16px] left-[-20px] sm:block hidden">
          <Image
            src={image1}
            placeholder="blur"
            quality={80}
            alt="trading-image"
            className="object-contain w-full h-[16rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default StartTrading;
