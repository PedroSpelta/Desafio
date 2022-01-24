import Image from "next/image";
import React from "react";
import { defaultWall } from "../../constants/wall";
import { IPaintRoomShape } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";
import ShapeImage from "./ShapeImage";

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
    <div className="">
      <SectionTitle number={1} title="Select Room Shape" />
      <div className="rounded-xl w-[300px] h-20 flex items-center justify-center gap-10">
        <ShapeImage
          title="Square"
          src={"/images/shape1.png"}
          onClick={() => test(1)}
        />
        <ShapeImage
          title="Rectangle"
          src={"/images/shape2.png"}
          onClick={() => test(2)}
        />
        <ShapeImage
          title="Custom"
          src={"/images/shape3.png"}
          onClick={() => test(3)}
        />
      </div>
    </div>
  );
};

export default PaintRoomShape;
