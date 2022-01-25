import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Introduction: React.FC = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      data-testid="introduction-div"
      className="flex flex-col justify-center mb-5"
    >
      <div className=" flex flex-col justify-center items-center bg-white shadow-md">
        <div
          id="introduction-text"
          className={`max-w-4xl w-full ${
            isVisible && "!max-h-[500px] !opacity-100"
          } max-h-0 opacity-0 overflow-hidden transition-all duration-1000 ease-linear `}
        >
          {/* <Image
          src={"/images/paintingWall.jpg"}
          alt=""
          width={"700px"}
          height={"400px"}
        /> */}
          <div className="max-w-2xl text-base font-semibold pb-5">
            <p >
              You don&apos;t know how much paint to buy for your next home
              project?
            </p>
            <p>
              Follow this simple steps to get an estimate, don&apos;t waste time
              and money!
            </p>
            <p>1. Select the shape of your room:</p>
            <p>
              2. Input your walls width and height in meters, the number of
              windows(2m x 1,2m) and doors(0,8m x 1,9m) on each wall.{" "}
            </p>
            <p>
              3. Get the both the m² you need to cover, and the quantity of
              paint cans you will need
            </p>
          </div>
        </div>
      </div>
      <button
        id="info-button"
        className="bg-white py-1 px-4 rounded-b-3xl max-w-fit m-auto shadow-md flex flex-col justify-center items-center "
        onClick={() => setIsVisible((state) => !state)}
      >
        <p className="leading-none">Info</p>
        {isVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </div>
  );
};

export default Introduction;
