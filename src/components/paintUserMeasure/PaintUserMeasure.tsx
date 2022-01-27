import React from "react";
import { IPaintUserMeasure } from "../../types/wall";
import SectionTitle from "../main/SectionTitle";
import PaintForm from "../paintForm/PaintForm";
import PaintSidebar from "./PaintSideBar";

const PaintUserMeasure: React.FC<IPaintUserMeasure> = ({walls, wallNumber, setWallNumber,setWalls}) => {
  return (
    <div id="paint-measure">
      <SectionTitle number={2} title="Measure your walls" />
      <div className="flex items-center">
        <PaintSidebar
          walls={walls}
          setWallNumber={setWallNumber}
          wallNumber={wallNumber}
        />
        <PaintForm walls={walls} setWalls={setWalls} wallNumber={wallNumber} />
      </div>
    </div>
  );
};

export default PaintUserMeasure;
