// import React from "react";
import {
  HeartIcon,
  HomeIcon,
  UserIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

function Footer() {
  return (
    <div className="flex items-center justify-center">
      <HomeIcon className="absolute w-[20px] h-[20px] top-[12px] left-[9.38%] right-[9.38%] bottom-[12.5%] hovi" />
      <SearchIcon className="absolute w-[20px] h-[20px] top-[12px] left-[97px] hovi " />
      <HeartIcon className=" absolute w-[20px] h-[20px] top-[12px] left-[246px] hovi" />
      <UserIcon className=" absolute w-[20px] h-[20px] top-[12px] left-[300px] hovi " />
      <div className=" absolute flex justify-center items-center bg-[#63b6ee] rounded-[30px] w-[30px] h-[30px] top-[-15px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">
        <ShoppingBagIcon className="w-[22px] h-[22px] text-black " />
      </div>
    </div>
  );
}

export default Footer;
