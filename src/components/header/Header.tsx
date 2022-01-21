import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex w-full justify-center border-b border-[#5a9de0]">
      <div className="w-full p-2  max-w-3xl ">
        <p className="pl-10">
          <Logo />
        </p>
      </div>
    </div>
  );
}

export default Header;
