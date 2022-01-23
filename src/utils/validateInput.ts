import { IWall } from "../types/paint/paint";

const window = {width: 200, height: 120};
const door = {width: 80, height: 190};


export const validateDoors = (wall:IWall) => {
  if( door.height + 30 > wall.height) return "Wall height should be at least 30 cm bigger than the door"
}

export const validateArea = (wall: IWall) => {
    const area = wall.width * wall.height;
    if (area > 150000 || area < 10000) {
      return "Area should be bigger than 1m² and smaller than 15m²"
    }
    const windowsArea = (window.height*window.width) * wall.windows;
    const doorsArea = (door.height*door.width) * wall.doors;
    const noPaintArea = windowsArea + doorsArea;
    console.log(noPaintArea, 0.5*area);
    

    if (noPaintArea > 0.5 * area) return "Windows and doors should, at maximum, occupy 50% of the wall";
}
