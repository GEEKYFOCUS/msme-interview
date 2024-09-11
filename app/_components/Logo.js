"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="">
      <Image
        src={logo}
        quality={100}
        alt="The Wild Oasis logo"
        className=" lg:w-full lg:h-[1rem]  md:w-[70%] w-[60%] h-[.9rem] md:h-[1rem]   "
      />
    </Link>
  );
}

export default Logo;
