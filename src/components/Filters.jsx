import React from "react";
import FilterIcons from "./FilterData";
import Filter from "./FilterCard";
import { GoFilter } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Filters() {
  const filterIcons = FilterIcons.map((filter) => {
    return <Filter key={filter.id} icon={filter.icon} title={filter.title} />;
  });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 15,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 11,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 7,
    },
    tablet2: {
      breakpoint: { max: 768, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 375 },
      items: 4,
    },
    mobile2: {
      breakpoint: { max: 375, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="fixed top-[4.5rem] bg-white z-10 left-0 right-0 py-4 px-8 md:px-12 lg:px-14 h-auto border-b flex justify-between items-center gap-4">
      {/* <div className="flex gap-8 items-center overflow-y-auto scrollbar-hide lg:w-11/12 md:w-4/5 cursor-pointer">
        {filterIcons}
      </div> */}
      <Carousel
        responsive={responsive}
        className="flex gap-8 items-center lg:w-11/12 md:w-4/5 cursor-pointer"
      >
        {filterIcons}
      </Carousel>
      ;
      <div className="hidden md:flex items-center gap-3 rounded-2xl px-4 py-2 border text-lg shadow-lg cursor-pointer hover:scale-110">
        <GoFilter />
        <h2 className="text-lg">Filters</h2>
      </div>
    </div>
  );
}
