import { height } from "@mui/system";
import Image from "next/image";
import React from "react";
import { IPaintCans } from "../../types/generic";

const canMap = [0.5, 2.5, 3.6, 18];

const PaintCans: React.FC<IPaintCans> = ({ paintCans }) => {
  return (
    <div className="">
      {paintCans.map((can, i) => (
        <div key={i} className="flex items-center">
          <Image
            src={"/images/bucket.png"}
            alt=""
            width={"20px"}
            height={"20px"}
            layout="fixed"
          />
          <div className="flex flex-col ml-2">
            <div className="flex">
              <p className="text-center cursive">{canMap[i]}</p>
              <p className="cursive">l</p>
            </div>
          </div>
          <p>
            <span style={{ fontSize: "10px" }}>x</span>
            <span className="cursive">{can}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PaintCans;
