import React from 'react'
import { TbWorld, TbCopyright } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className='fixed bg-white w-full bottom-0 flex border-t-2 items-center text-[0.m] lg:text-xs xl:text-base justify-between py-4 px-8 md:px-12 lg:px-14'>
        {/* left */}
        <div className='flex items-center gap-4 '>
            <p className='flex items-center gap-2'> <TbCopyright className='text-xl'/> 2022 Airbnb, Inc.</p>
            <ul className='hidden lg:flex items-center gap-2 md:gap-8 list-disc list-inside mx-4'>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Privacy</li>
                <li>Your Privacy Choices</li>
                <li>Destinations</li>
            </ul>
        </div>
        {/* right */}
        <div className='hidden sm:flex items-center font-semibold gap-4'>
            <TbWorld/>
            <p>English (US) </p>
            <p>$ USD</p>
            <p>Support & resources</p>
        </div>
    </div>
  )
}

export default Footer
