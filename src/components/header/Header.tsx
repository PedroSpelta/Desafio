import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div>
      <div className="bg-gray-300 text-sm text-gray-500 flex justify-center">
        <div className=" w-full max-w-3xl flex justify-end">
          <p className="cursor-pointer">
          Contact me
          </p>
        </div>
      </div>
    <div className="flex w-full justify-center border-b border-[#5a9de0]">
      <div className="w-full p-2 max-w-3xl ">
        <p className="pl-10">
          <Logo />
        </p>
      </div>
    </div>
    </div>
  );
}

export default Header;
