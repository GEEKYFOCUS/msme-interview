import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-black lg:px-[100px] md:px-[60px] px-[40px]  py-[40px] text-white  ">
        <div className="flex justify-between items-center py-[20px]">
          <div>
            <Image
              className=""
              src="/footer/tuluIcon.svg"
              alt="logo"
              width={230}
              height={39}
            />
          </div>
          <div className="flex gap-[10px]">
            <div className="bg-[#FFD900] rounded-[100%] p-2">
              <a href="#">
                <Image
                  className=""
                  src="/footer/twitter.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="bg-[#FFD900] rounded-[100%] p-2">
              <a href="#">
                <Image
                  className=""
                  src="/footer/instagram.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="bg-[#FFD900] rounded-[100%] p-2">
              <a href="#">
                <Image
                  className=""
                  src="/footer/linkedIn.svg"
                  alt="linkedIn"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="bg-[#FFD900] rounded-[100%] p-2">
              <a href="#">
                <Image
                  className=""
                  src="/footer/discord.svg"
                  alt="discord"
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <div className="bg-[#FFD900] rounded-[100%] p-2">
              <a href="#">
                <Image
                  className=""
                  src="/footer/facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row flex-col justify-between ">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  pt-[50px] lg:w-full">
            <div>
              <ul className="text-[#FFD900] text-[20px] mb-[20px]">
                <a href="#">Use Case</a>
                <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Payment</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Remittance</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Investment</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Trade</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Capital</a>
                </li>
              </ul>
              <div>
                <ul className="text-[#FFD900] text-[20px] mb-[20px] mt-[125px]">
                  <a href="#">Learn</a>

                  <li className="text-white text-[15px] pb-[20px] pt-[35px] hover:text-[#FFD900]">
                    <a href="#">News</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a href="#">Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="text-[#FFD900] text-[20px] mb-[20px]">
                <a href="#">Products</a>
                <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Switch</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Gateway</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Purse</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Academy</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a>CBDCs</a>
                </li>
                <li className="text-[#FFD900] text-[20px] underline hover:text-[#FFD900]">
                  <a href="#">See more</a>
                </li>
              </ul>
              <div>
                <ul className="text-[#FFD900] text-[20px] mb-[20px] mt-[91px]">
                  <a href="#">Community</a>
                  <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a>Facebook</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="text-[#FFD900] text-[20px] mb-[20px] ">
                <a href="">Company</a>
                <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">About</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Contact</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">FAQ</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Team</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Partner</a>
                </li>

                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Career</a>
                </li>
              </ul>
              <div>
                <ul className="text-[#FFD900] text-[20px] mb-[20px] mt-[80px]">
                  <a href="">Resources</a>
                  <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                    <a>Roadmap</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a>Whitepaper</a>
                  </li>
                  <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                    <a href="#">Our Story</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="text-[#FFD900] text-[20px] mb-[20px]">
                <a href="#">Developer</a>
                <li className="text-white text-[15px] pt-[35px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">APIs</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">SDKs</a>
                </li>
                <li className="text-white text-[15px] pb-[20px] hover:text-[#FFD900]">
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#181818] p-4 items-center lg:w-[500px] md:w-full w-full lg:h-fit md:h-[270px] h-auto justify-center space-y-[25px]  rounded-[7px] lg:mt-[45px]">
            <h1 className="font-bold text-[25px]">Subscribe to newsletter</h1>
            <p className="opacity-70">Sign up to receive new update</p>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              className="mt-1 p-2 w-full border-[0.5px] border-white bg-[#6D6D6D] rounded-md text-black"
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last name"
              className="mt-1 p-2 w-full border-[0.5px] border-white bg-[#6D6D6D] rounded-md text-black"
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
              className="mt-1 p-2 w-full border-[0.5px] border-white bg-[#6D6D6D] rounded-md text-black"
            />
            <button className="bg-black py-[10px] px-[35px] rounded-[7px] text-[#FFD900] w-full font-bold ">
              Get Started
            </button>
          </div>
        </div>

        <div className="lg:flex lg:flex-row flex-col justify-between my-[30px]">
          <div className="lg:flex lg:flex-row flex-col gap-[60px]">
            <div className="flex flex-col ">
              <a href="#" className="text-[16px] text-white opacity-50 pt-[]">
                Privacy & Policy
              </a>
            </div>

            <div className="flex flex-col lg:pt-0 pt-4">
              <a href="#" className="text-[16px] text-white opacity-50 pt-[]">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:pt-0 pt-4">
              <p className="text-[16px] text-white opacity-50 pt-[] lg:w-auto w-[260px]">
                &copy; 2024 copyright by TuluPay.com. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
