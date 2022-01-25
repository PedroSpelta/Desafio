import Image from "next/image";
import React from "react";
import { IShapeImage } from "../../types/generic";

const ShapeImage: React.FC<IShapeImage> = ({
  title,
  src,
  onClick,
  selected,
}) => {
  return (
    <div
      className={`hover:bg-blue-300 flex flex-col justify-center items-center m-auto w-16 h-16 rounded-xl cursor-pointer ${
        selected && "bg-[#3b82f6dd]"
      } `}
      onClick={onClick}
    >
      <Image src={src} alt="" width={"40px"} height={"40px"} />
      <p className="font-semibold text-sm">{title}</p>
    </div>
  );
};

export default ShapeImage;
