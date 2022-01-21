import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { Dispatch, ReactComponentElement, SetStateAction } from "react";

interface IPaintRoomShape {
  setDifferentWalls: Dispatch<number>;
}

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ setDifferentWalls }) => {
  return (
    <div className="rounded-xl bg-[#46446d] w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setDifferentWalls(1)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setDifferentWalls(2)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setDifferentWalls(4)}
      ></div>
    </div>
  );
};

export default PaintRoomShape;
