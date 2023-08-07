import React from "react";
import FilterIcons from "./FilterData";
import Filter from "./Filter";

export default function Filters(){
    const filterIcons = FilterIcons.map(filter => {
        return(
            <Filter key={filter.id} icon={filter.icon} title={filter.title} />
        )
    })
    return(
        <div className="py-2 px-8 md:px-12 lg:px-14 h-24 shadow-lg flex justify-between items-center"> 
            <div className="flex w-4/5 gap-8 items-center ">
                {filterIcons}
            </div>
            <div>
                <h2 className="text-lg">Filters</h2>
            </div>
        </div>
        
    )
} 