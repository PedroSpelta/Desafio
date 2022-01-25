import React from "react";
import LogoSvg from "./LogoSvg";

function Logo() {
  return (
    <div id="logo" className="flex w-full justify-center">
      <div className="w-full py-2 max-w-4xl ">
        <LogoSvg />
      </div>
    </div>
  );
}

export default Logo;
