import React from "react";
import { ISectionTitle } from "../../types/section";

const SectionTitle: React.FC<ISectionTitle> = ({ number, title }) => {
  return (
    <div className="flex items-center">
      <p className="bg-[#5C2E91] rounded-full w-8 h-8 text-white font-bold flex items-center justify-center">
        {number}.
      </p>
      <p className="ml-2 text-lg font-semibold">{title}</p>
    </div>
  );
};

export default SectionTitle;
