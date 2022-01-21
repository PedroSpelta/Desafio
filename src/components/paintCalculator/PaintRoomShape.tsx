import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { Dispatch, ReactComponentElement, SetStateAction } from "react";

// interface IWall {
//   width: number;
//   height: number;
// }

// interface IPantSidebar {
//   walls: Array<{}>;
// }

interface IPaintRoomShape {
  setWalls: React.Dispatch<React.SetStateAction<{}[]>>;
}

const PaintRoomShape: React.FC<IPaintRoomShape> = ({ setWalls }) => {
  const setWallHandler = (size: number) => {
    setWalls((state) => {
      if (size === 1) return [{}];
      if (size === 2) return [{}, {}];
      if (size === 4) return [{}, {}, {}, {}];
      return state;

      // const newState = [...state];

      // if (state.length < size) {
      //   newState.push({});

      //   return newState;
      // } else if (state.length > size) {
      //   newState.pop();
      //   return newState;
      // }
      // return newState;
    });
  };

  return (
    <div className="rounded-xl bg-[#46446d] w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallHandler(1)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallHandler(2)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => setWallHandler(4)}
      ></div>
    </div>
  );
};

export default PaintRoomShape;
