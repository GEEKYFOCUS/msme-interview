"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import spotImage from "@/public/spot.png";
import futureTrade from "@/public/future.png";
import marginTrade from "@/public/margin.png";
import stakingTrade from "@/public/staking.png";
import newLearn from "@/public/learn/news.png";
import pressLearn from "@/public/learn/press.png";
import license from "@/public/learn/license.png";
import privacy from "@/public/learn/privacyPolicy.png";
import { useRouter } from "next/navigation";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [learndropdownPosition, setLearnDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const tradeItem = useRef(null);
  const learnItem = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    if (tradeItem.current) {
      const rect = tradeItem.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY, // Position below the trade item
        left: rect.left + window.scrollX, // Align left with trade item
      });
    }
    setIsOpen(!isOpen);
    // Toggle the dropdown visibility
  };
  const toggleLearnDropDown = () => {
    if (learnItem.current) {
      console.log(isLearnOpen);
      console.log("click");
      const rect = learnItem.current.getBoundingClientRect();
      setLearnDropdownPosition({
        top: rect.bottom + window.scrollY, // Position below the trade item
        left: rect.left + window.scrollX, // Align left with trade item
      });

      setIsLearnOpen((open) => !open);
      console.log("isLearn");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#trade-item") &&
        !event.target.closest("#trade-dropdown")
      ) {
        setIsOpen(false);
      }

      if (
        !event.target.closest("#learn-item") &&
        !event.target.closest("#learn-dropdown")
      ) {
        setIsLearnOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const tradeItemArr = [
    {
      icon: spotImage,
      title: "Spot Trading",
      description: "Hold and trade Crypto asset",
    },
    {
      icon: marginTrade,
      title: "Margin Trading",
      description: "Trade in marginal exchange",
    },
    {
      icon: futureTrade,
      title: "Futute Trading ",
      description: "Perpetual Trading on future",
    },
    {
      icon: stakingTrade,
      title: "Staking",
      description: "Staking APY  on every staking",
    },
  ];
  const learnItems = [
    {
      icon: newLearn,
      title: "News ",
      description: "Latest news about our exchange",
    },
    {
      icon: pressLearn,
      title: "Press Release",
      description: "Every release from our team ",
    },
    {
      icon: license,
      title: "Terms of service and condition",
      description: "Learn about terms and conditions of",
    },
    {
      icon: privacy,
      title: "Privacy & Policy",
      description: "Your privacy is secure with us",
    },
  ];

  return (
    <nav className="">
      <ul className="flex lg:gap-x-16 md:gap-x-12  md:text-sm lg-text-base md:flex-row flex-col gap-y-12  items-center">
        <li>
          <Link href="#">Market</Link>
        </li>
        <li className="">
          <div
            className="flex items-center"
            id="trade-item"
            ref={tradeItem}
            onClick={toggleDropdown}
          >
            <Link href="#" className="trade-class">
              Trade
            </Link>
            <RiArrowDropDownLine className="cursor-pointer" />
          </div>
          {isOpen && (
            <ul
              id="trade-dropdown"
              className="bg-primary-1000 text-white flex flex-col gap-y-2 rounded-lg shadow-lg absolute w-auto mt-2  border-gray-700 border-[0.2px] px-3 py-2 "
              style={{
                position: "absolute",
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
              }}
            >
              {tradeItemArr.map((el, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-600 grid grid-cols-[auto_1fr] gap-x-2 grid-rows-2"
                  onClick={() => router.push("/trade/spot-trading")}
                >
                  <div className="reltive aspect-square row-span-2  max-w-[2rem] rounded-lg flex items-center justify-center bg-black ">
                    <Image src={el.icon} className="w-4" alt="Spot Trading " />
                  </div>
                  <span className="text-sm font-100">{el.title}</span>
                  <span className="text-xs font-light">{el.description}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="flex gap-x-2 items-center">
          <div
            className="flex items-center"
            id="learn-item"
            ref={learnItem}
            onClick={toggleLearnDropDown}
          >
            <Link href="#" className="trade-class">
              Learn
            </Link>
            <RiArrowDropDownLine className="cursor-pointer" />
          </div>

          {isLearnOpen && (
            <ul
              id="learn-dropdown"
              className="bg-primary-1000 text-white flex flex-col gap-y-2 rounded-lg shadow-lg absolute w-auto mt-2  border-gray-700 border-[0.2px] px-3 py-2 "
              style={{
                position: "absolute",
                top: `${learndropdownPosition.top}px`,
                left: `${learndropdownPosition.left}px`,
              }}
            >
              {learnItems.map((el, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-600 grid grid-cols-[auto_1fr] gap-x-2 grid-rows-2"
                >
                  <div className="reltive aspect-square row-span-2  max-w-[2rem] rounded-lg flex items-center justify-center bg-black ">
                    <Image src={el.icon} className="w-4" alt="Spot Trading " />
                  </div>
                  <span className="text-sm font-100">{el.title}</span>
                  <span className="text-xs font-light">{el.description}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
