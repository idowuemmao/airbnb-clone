import React, { useState } from 'react'
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';


const HomeCard = ({img, title, distanceAway,rating,startDate,endDate,price}) => {
    const [star, setStar] = useState(true);
    const [favorite, setFavorite] = useState(false);

    const handleToggle1 = () => {
            setFavorite(prevState => !prevState);
        };
        const handleToggle2 = () => {
            setStar(prevState => !prevState);
          };
  return (
    <div className='text-base relative'>
      <img src={img} alt={title} className='grid gap-2 object-fit h-72 w-full rounded-xl'/>
      <button className='absolute top-2 right-2' onClick={handleToggle1}>
        {favorite ? <BsHeartFill/> : <BsHeart/>}
      </button>
      <div className='flex items-start justify-between'>
         <div>
         <p className='text-gray-800 font-semibold'>{title}</p>
         <p className='text-gray-400'>{distanceAway} kilometers away</p>
         <p className='text-gray-400'>{startDate} {endDate}</p>
         <p className='text-gray-800'><b>${price}</b> night</p>
         </div>
         <div className='flex items-center gap-1 text-gray-900'>
            <button onClick={handleToggle2}>{star ? <BiSolidStar/> : <BiStar/>}</button>
            {rating}
         </div>
      </div>
    </div>
  )
}

export default HomeCard
