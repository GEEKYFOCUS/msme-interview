"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";

function UserNav() {
  return (
    <div className="flex  space-x-8  md:flex-row flex-col gap-y-6 items-center">
      <MdOutlineLightMode />
      {/* <select className="text-white  bg-black px-4 py-2 outline-none border-none cursor-pointer"> */}
      <select className="bg-black text-white shadow-md  p-2 rounded border-none outline-none md:text-sm lg:text-base">
        <option value="USD">USD</option>
        <option value="NGN">NGN</option>
        <option value="AUD">AUD</option>
        <option value="JPY">JPY</option>
        <option value="KRW">KRW</option>
        <option value="INR">INR</option>
        <option value="ADR">ADR</option>
        <option value="TRY">TRY</option>
        <option value="PLN">PLN</option>
        <option value="PHP">PHP</option>
        <option value="ZAR">ZAR</option>
        <option value="CHR">CHR</option>
        <option value="NOK">NOK</option>
      </select>
      <div>
        <Link
          href="/login"
          className="border-2 border-yellow-500 lg:px-4 lg:py-2 md:px-2 md:py-1 px-3 py-2 lg:text-base md:text-sm text-yellow-400 rounded-lg"
        >
          Login
        </Link>
      </div>
      <div>
        <Link
          href="/signup"
          className="lg:px-4 lg:py-2 md:px-3 md:py-1 px-3 py-2 bg-yellow-500 rounded-lg md:text-sm lg:text-base  text-primary-950 md:font-[500] lg:font-bold "
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default UserNav;
