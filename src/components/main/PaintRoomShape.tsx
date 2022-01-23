import React from 'react';
import { defaultWall } from '../../constants/wall';
import { IPaintRoomShape } from '../../types/wall';



const PaintRoomShape: React.FC<IPaintRoomShape> = ({ walls, setWalls }) => {
  const test = (newSize: number) => {
    const { length: size } = walls;
    if (newSize === size) return;
    const modifyNumber = Math.abs(newSize - size);

    setWalls((state) => {
      const newWalls = [...state];
      for (let i = 0; i < modifyNumber; i += 1) {
        if( newSize > size) newWalls.push(defaultWall);
        else newWalls.pop();
      }
      return newWalls;
    });
  };

  return (
    <div className="rounded-xl bg-[#46446d] w-[300px] h-20 flex items-center justify-center gap-10">
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(1)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(2)}
      ></div>
      <div
        className="bg-white w-16 h-16 rounded-xl cursor-pointer"
        onClick={() => test(4)}
      ></div>
    </div>
  );
};

export default PaintRoomShape;
