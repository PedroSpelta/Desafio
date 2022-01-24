import { Dispatch, SetStateAction } from "react";

export interface IWall {
  width: number;
  height: number;
  windows: number;
  doors: number;
  area: number;
}

export interface IWalls extends Array<IWall> {}

export interface IWallsObject {
  walls: IWalls;
}

export interface IWallForm {
  walls: IWalls;
  wallNumber: number;
  setWalls: Dispatch<SetStateAction<IWalls>>;
}

export interface IPaintSidebar {
  walls: IWalls;
  setWallNumber: Dispatch<SetStateAction<number>>;
  wallNumber: number;
}

export interface IPaintRoomShape {
  walls: IWalls;
  setWalls: Dispatch<SetStateAction<IWalls>>;
}

export interface IPaintResult {
  walls: IWalls;
  wallNumber: number;
}

export interface IPaintResultTable {
  realWalls: IWalls;
  totalArea: number;
}