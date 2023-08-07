import React from 'react'
import HomesData from './HomesData'
import HomeCard from './HomeCard'

const Homes = () => {
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
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-12 lg:px-14'>
      {HomeElement}
    </div>
  )
}

export default Homes
