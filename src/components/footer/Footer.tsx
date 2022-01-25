import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = ({}) => {
  return (
    <div className="h-10 w-full fixed bottom-0 bg-[#2D2D2D] text-white text-sm flex justify-center items-center">
      <div className="max-w-4xl w-full flex justify-between items-center gap-2 text-gray-300">
        <div>Made by Pedro Spelta</div>
        <div className="flex justify-center items-center gap-2">
          Contact me
          <div className="hover:scale-110 cursor-pointer flex justify-center items-center">
            <Link href={"https://www.linkedin.com/in/pedrospelta/"} passHref>
              <a className="flex justify-center items-center">
                <Image
                  src={"/images/footer/linkedin.png"}
                  alt=""
                  width={"28px"}
                  height={"28px"}
                />
              </a>
            </Link>
          </div>
          <div className="hover:scale-110 cursor-pointer flex justify-center items-center">
            <Link href={"https://www.linkedin.com/in/pedrospelta/"} passHref>
              <a className="flex justify-center items-center">
                <Image
                  src={"/images/footer/github.png"}
                  alt=""
                  width={"28px"}
                  height={"28px"}
                />
              </a>
            </Link>
          </div>
          <div className="hover:scale-110 cursor-pointer flex justify-center items-center">
            <Link href={"mailto:p.h.s.8989@hotmail.com"} passHref>
              <a className="flex justify-center items-center">
                <Image
                  src={"/images/footer/email.png"}
                  alt=""
                  width={"28px"}
                  height={"28px"}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
