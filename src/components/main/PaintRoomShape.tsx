import Image from "next/image";
import React from "react";
import { defaultWall } from "../../constants/wall";
import { IPaintRoomShape } from "../../types/wall";

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ walls, setWalls }) => {
  const test = (newSize: number) => {
    const { length: size } = walls;
    if (newSize === size) return;
    const modifyNumber = Math.abs(newSize - size);

    setWalls((state) => {
      const newWalls = [...state];
      for (let i = 0; i < modifyNumber; i += 1) {
        if (newSize > size) newWalls.push(defaultWall);
        else newWalls.pop();
      }
      return newWalls;
    });
  };

  return (
    <div className="rounded-xl w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="hover:bg-blue-300 flex flex-col justify-center items-center m-auto w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(1)}
      >
        <Image
          src={"/images/shape1.png"}
          alt=""
          width={"40px"}
          height={"40px"}
        />
        <p className="font-semibold text-sm">Square</p>
      </div>
      <div
        className="hover:bg-blue-300 flex flex-col justify-center items-center m-auto w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(2)}
      >
        <Image
          src={"/images/shape2.png"}
          alt=""
          width={"52px"}
          height={"52px"}
        />
        <p className="font-semibold text-sm">Rectangle</p>

      </div>
      <div
        className="hover:bg-blue-300 flex flex-col justify-center items-center m-auto w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(4)}
      >
        <Image
          src={"/images/shape3.png"}
          alt=""
          width={"52px"}
          height={"52px"}
        />
        <p className="font-semibold text-sm">Custom</p>

      </div>
    </div>
  );
};

export default PaintRoomShape;
