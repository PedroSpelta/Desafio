import React from "react";
import { ISectionTitle } from "../../types/section";

const SectionTitle: React.FC<ISectionTitle> = ({ number, title }) => {
  return (
    <div className="flex items-center">
      <p className="bg-[#373655] rounded-full w-8 h-8 text-white font-bold flex items-center justify-center">
        {number}.
      </p>
      <p className="ml-2">{title}</p>
    </div>
  );
};

export default SectionTitle;