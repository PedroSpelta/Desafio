import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { Dispatch, ReactComponentElement, SetStateAction } from "react";
import { IPaintRoomShape } from "../../types/paint/paint";

const defaultWall = { width: 100, height: 100 };

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ walls, setWalls }) => {
  const test = (newSize: number) => {
    const { length: size } = walls.walls;
    if (newSize === size) return;
    const modifyNumber = Math.abs(newSize - size);

    setWalls((state) => {
      const newWalls = [...state.walls];
      for (let i = 0; i < modifyNumber; i += 1) {
        if( newSize > size) newWalls.push(defaultWall);
        else newWalls.pop();
      }
      return { ...state, walls:newWalls };
    });
  };

  return (
    <div className="rounded-xl bg-[#46446d] w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(1)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(2)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(4)}
      ></div>
    </div>
  );
};

export default PaintRoomShape;
