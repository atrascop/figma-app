import React from "react";
import { GiNetworkBars } from "react-icons/gi/";
import { BsBatteryFull, BsWifi } from "react-icons/bs";

function Header() {
  return (
    <div className=" absolute w-[360px] h-[20px] top-1">
      <div className=" absolute top-[9px] left-[12px] text-[14px] font-[640]  ">
        <div className="absolute ">00:00</div>
      </div>
      <div className="absolute  ">
        <GiNetworkBars className="absolute w-[15px] h-[12px] top-[12px] left-[310px]" />
        <BsBatteryFull className="absolute w-[15px] h-[15px]  top-[12px] left-[330px]" />
        <BsWifi className="absolute w-[15px] h-[15px] top-[9px] left-[290px]" />
      </div>
    </div>
  );
}

export default Header;
