import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IPantSidebar {
  walls: Array<{}>;
}

const fadeIn = (i: number) => `fadeIn ${500}ms ease-out ${500 * i}ms forward`;

const PaintSidebar: React.FC<IPantSidebar> = ({ walls }) => {  
  return (
    <div className="rounded-xl h-[400px] w-20 overflow-hidden">
      <div className="w-16 cursor-pointer h-16 flex items-center">
        <div className="bg-white w-16 h-16 rounded-xl" />
      </div>
      <TransitionGroup className="flex flex-col items-center h-full gap-2">
        {walls.map((e, i) => (
          <CSSTransition key={i} timeout={600} classNames={"wallSelector"}>
            <div className={`w-16 h-16 cursor-pointer flex items-center`}>
              <div className="bg-white w-16 h-16 rounded-xl"></div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PaintSidebar;
