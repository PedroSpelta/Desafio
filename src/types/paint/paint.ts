import { Dispatch, SetStateAction } from "react";

export interface IWall {
  width: number;
  height: number;
  windows: number;
  doors: number;
}

export interface IWalls extends Array<IWall> {}

export interface IWallsObject {
  walls: IWalls;
  active: number;
}

// export interface IPaintSizeState {
//   actualWall: IPaintSize;
//   setActualWall: Dispatch<IPaintSize>;
// }

export interface IPaintRoomShape {
  walls: IWallsObject;
  setWalls: Dispatch<SetStateAction<IWallsObject>>;
}

export interface IPantSidebar {
  walls: IWallsObject;
  setWalls: Dispatch<SetStateAction<IWallsObject>>;
}

export interface IPaintArea {
  actualWall: IWall;
  setActualWall: Dispatch<SetStateAction<IWall>>;
}

export interface IPaintInput {
  actualWall: IWall;
  setActualWall: Dispatch<SetStateAction<IWall>>;
}
