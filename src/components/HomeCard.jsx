import React from 'react'
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';


const HomeCard = ({img, title, distanceAway,rating,startDate,endDate,price}) => {
  return (
    <div className='text-base '>
      <img src={img} alt={title} className='grid gap-2 object-cover max-h-44 w-full'/>
      <div className='flex items-start justify-between'>
         <div>
         <p className='text-gray-800 font-semibold'>{title}</p>
         <p className='text-gray-400'>{distanceAway} kilometers away</p>
         <p className='text-gray-400'>{startDate} {endDate}</p>
         <p className='text-gray-800'><b>${price}</b> night</p>
         </div>
         <div className='flex items-center gap-1 text-gray-900'>
            <BiSolidStar/>
            {rating}
         </div>
      </div>
    </div>
  )
}

export default HomeCard
