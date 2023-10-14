import React from "react";

const Filter = ({ title, icon }) => {
  return (
    <div className="h-auto hover:border-b-4 opacity-70 hover:scale-110 hover:opacity-100 border-b-slate-600 flex flex-col items-center pb-8 pt-4 gap-1">
      <img src={icon} alt={icon.title} className="w-8 object-contain " />
      <p className="text-[0.65rem] min-w-max">{title}</p>
    </div>
  );
};

export default Filter;
