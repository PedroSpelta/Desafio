import React from "react";
import ContactBar from "./ContactBar";
import Logo from "./Logo";
import MenuBar from "./MenuBar";

function Header() {
  // ref https://loja.decorcolors.com.br/
  return (
    <div>
      <ContactBar />

      <Logo />

      <MenuBar />
      <div className="w-full flex justify-center items-center h-10 bg-white text-lg text-[#5C2E91] font-semibold shadow-md">
        <div className="w-full max-w-4xl ">Paint Calculator</div>
      </div>
    </div>
  );
}

export default Header;
