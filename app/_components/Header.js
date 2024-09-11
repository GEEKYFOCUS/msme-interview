"use client";

import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import Link from "next/image";
import Logo from "./Logo";
import UserNav from "./UserNav";
import Navigation from "./Navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <header className=" md:block hidden lg:px-2 lg:py-5 md:px-5 md:py-5  sm:px-8  sm:py-4  sticky top-0  bg-black  z-[1000]">
        <div className="flex justify-between items-center   max-w-7xl mx-auto md: gap-x-6">
          <Logo />
          <Navigation />
          <UserNav />
        </div>
      </header>

      <header className=" block md:hidden lg:px-2 lg:py-5 md:px-5 md:py-5  sm:px-8  sm:py-4  px-6 py-4 sticky top-0  bg-black  z-[1000]">
        <div className="flex justify-between items-center   max-w-7xl mx-auto md: gap-x-6">
          <Logo />
          <div>
            <BiMenuAltRight
              onClick={() => {
                console.log(isOpen);
                setIsOpen((open) => !open);
              }}
            />
          </div>
        </div>
        {isOpen && (
          <div
            className={`fixed top-0 left-0 h-screen w-screen bg-primary-3000 z-[90] transform transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "translate-x-[100%]"}
             mt-3 py-6 flex flex-col items-center`}
          >
            <div className="ml-auto px-6 ">
              <BiMenuAltRight
                onClick={() => {
                  console.log(isOpen);
                  setIsOpen((open) => !open);
                }}
              />
            </div>
            <Navigation />
            <UserNav />
          </div>
        )}
      </header>
    </>
  );
}
