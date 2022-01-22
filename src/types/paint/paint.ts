import { Dispatch } from "react";

export interface IPaintSize {
  width: number;
  height: number;
}

export interface IPaintSizeState {
  size: IPaintSize;
  setSize: Dispatch<IPaintSize>;
}

export interface IPaintRoomShape {
  setWalls: React.Dispatch<React.SetStateAction<Array<IPaintSize>>>;
}