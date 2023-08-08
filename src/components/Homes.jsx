import React, { useState } from 'react'
import HomesData from './HomesData'
import HomeCard from './HomeCard'
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';

const Homes = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
            setToggle(prevState => !prevState);
        };
    const HomeElement = HomesData.map(home => {
        return(
            <HomeCard 
            key={home.id} 
            title={home.title}
            img={home.img} 
            price={home.price} 
            startDate={home.startDate} 
            endDate={home.endDate} 
            distanceAway={home.distanceAway} 
            rating= {home.rating}
            />
        )
    })
  return (
    <div className='mt-48 z-0 px-8 md:px-12 lg:px-14 grid gap-4 pt-8'>
        <div className='w-full flex justify-center items-center'>
            <div className='flex w-1/2 align-middle border-2 rounded-xl p-4 gap-4 items-center'>
            <p className='font-semibold'>Display total price</p>
            <p className='border-l-2 pl-4 pr-8 text-gray-600'>Include all fees, before taxes</p>
            <button onClick={handleToggle} className='text-5xl ml-auto text-gray-400'>{toggle ? <LiaToggleOffSolid/> : <LiaToggleOnSolid/>}</button> 
            </div>
        </div>
        <div className='grid sm:grid-cols-2 pt-1 lg:grid-cols-4 gap-8'>{HomeElement}</div>
    </div>
  )
}

export default Homes
