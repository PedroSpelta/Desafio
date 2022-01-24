import Image from "next/image";
import React, { createRef, Dispatch, useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IPaintSidebar } from "../../types/wall";

const PaintSidebar: React.FC<IPaintSidebar> = ({ walls, setWallNumber,wallNumber }) => {
  const [imagePath, setImagePath] = useState(`/images/cubeOne`);

  useEffect(() => {
    if (walls.length === 4) return setImagePath(`/images/cubeFour`);
    else if (walls.length === 2) return setImagePath(`/images/cubeTwo`);
    return setImagePath(`/images/cubeOne`);
  }, [walls.length]);

  return (
    <div className="h-[224px] overflow-hidden mx-8">
      <TransitionGroup className="flex flex-col items-center h-full gap-2">
        {walls.map((e, i) => {
          const itemRef = createRef<HTMLDivElement>();
          const bgColor = i===wallNumber ? '!bg-blue-500': '';
          return (
            <CSSTransition
              nodeRef={itemRef}
              key={i}
              timeout={600}
              classNames={"wallSelector"}
            >
              <div
                ref={itemRef}
                className={`cursor-pointer flex items-center `}
                onClick={() => setWallNumber(i)}
              >
                <div className={`hover:bg-blue-300 ${bgColor} w-12 h-12 rounded-md flex justify-center items-center`}>
                  <Image
                    src={`${imagePath}${i + 1}.png`}
                    width="34px"
                    height="34px"
                    alt=""
                  />
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PaintSidebar;
