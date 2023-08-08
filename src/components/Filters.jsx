import React from "react";
import FilterIcons from "./FilterData";
import Filter from "./FilterCard";
import { GoFilter} from 'react-icons/go';



export default function Filters(){
    const filterIcons = FilterIcons.map(filter => {
        return(
            <Filter key={filter.id} icon={filter.icon} title={filter.title} />
        )
    })
    return(
        <div className="fixed top-16 bg-white z-10 left-0 right-0 py-4 px-8 md:px-12 lg:px-14 h-auto border-b flex justify-between items-center gap-4"> 
            <div className="flex gap-8 items-center overflow-y-auto lg:w-11/12 md:w-4/5">
                {filterIcons}
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-2 border text-lg shadow-lg ">
                <GoFilter/>
                <h2 className="text-lg">Filters</h2>
            </div>
        </div>
        
    )
} 