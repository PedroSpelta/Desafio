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
    </div>
  );
}

export default Header;
