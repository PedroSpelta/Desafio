import React, { Dispatch, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IPantSidebar, IWallsObject } from "../../types/paint/paint";

const PaintSidebar: React.FC<IPantSidebar> = ({ walls, setWalls, wallQty }) => {  
  return (
    <div className="rounded-xl h-[400px] w-20 overflow-hidden">
      <TransitionGroup className="flex flex-col items-center h-full gap-2">
        {walls.walls.map((e, i) => (
          <CSSTransition key={i} timeout={600} classNames={"wallSelector"}>
            <div
              className={`w-16 h-16 cursor-pointer flex items-center`}
              onClick={() =>
                setWalls((state: IWallsObject) => {
                  const { walls } = state;
                  return { walls, active: i };
                })
              }
            >
              <div className="bg-white w-16 h-16 rounded-xl"></div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PaintSidebar;
