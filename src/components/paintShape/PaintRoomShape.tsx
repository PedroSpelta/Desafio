import Image from "next/image";
import React from "react";
import { defaultWall } from "../../constants/wall";
import { IPaintRoomShape } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";
import ShapeImage from "./ShapeImage";

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ walls, setWalls }) => {
  const reShapeHandler = (newSize: number) => {
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
    <div id="paint-shape" className="w-[250px]">
      <SectionTitle number={1} title="Select Room Shape" />
      <div className="rounded-xl ml-5 h-20 flex items-center justify-center gap-3">
        <ShapeImage
          selected={walls.length === 1}
          title="Square"
          src={"/images/shape1.png"}
          onClick={() => reShapeHandler(1)}
        />
        <ShapeImage
          selected={walls.length === 2}
          title="Rectangle"
          src={"/images/shape2.png"}
          onClick={() => reShapeHandler(2)}
        />
        <ShapeImage
          selected={walls.length === 4}
          title="Custom"
          src={"/images/shape3.png"}
          onClick={() => reShapeHandler(4)}
        />
      </div>
    </div>
  );
};

export default PaintRoomShape;
