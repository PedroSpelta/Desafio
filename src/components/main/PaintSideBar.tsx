import React, { createRef, Dispatch, useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IPaintSidebar } from "../../types/wall";

const PaintSidebar: React.FC<IPaintSidebar> = ({ walls, setWallNumber }) => {
  const nodeRef = useRef(null);

  return (
    <div className="rounded-xl h-[400px] w-20 overflow-hidden">
      <TransitionGroup className="flex flex-col items-center h-full ">
        {walls.map((e, i) => {
          const itemRef = createRef<HTMLDivElement>();
          return (
            <CSSTransition
              nodeRef={itemRef}
              key={i}
              timeout={600}
              classNames={"wallSelector"}
            >
              <div
                ref={itemRef}
                className={`w-16 h-16 cursor-pointer flex items-center`}
                onClick={() => setWallNumber(i)}
              >
                <div className="bg-red-500 w-16 h-16 rounded-xl"></div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PaintSidebar;
