import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { Dispatch, ReactComponentElement, SetStateAction } from "react";
import { IPaintRoomShape, IPaintSize } from "../../types/paint/paint";

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ setWallQty }) => {
  return (
    <div className="rounded-xl bg-[#46446d] w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallQty(1)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallQty(2)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallQty(4)}
      ></div>
    </div>
  );
};

export default PaintRoomShape;
