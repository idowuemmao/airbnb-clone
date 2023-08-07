import React from 'react';
import {AIRBNBicons} from '../assets'
import { TbWorld, TbMenu2, TbUser, TbSearch } from 'react-icons/tb';

export default function Navbar(){
    return(
        <div className='shadow-xl flex items-center justify-between py-2 px-8 md:px-12 lg:px-14'>
            {/* left */}
            <div className='flex items-center gap-1'>
                <img src={AIRBNBicons.logo} alt="airbnb-logo" className='w-8 object-contain'/>
                <h2 className='text-2xl font-bold text-[#ff5a60]'>airbnb</h2>
            </div>
            {/* middle */}
            <div className='hidden lg:flex  items-center text-base justify-between rounded-full p-2 border border-slate-400 px-6 font-semibold gap-4'>
                <button >Anywhere</button>
                <button className='border-x-2 px-2' >Any week</button>
                <button className='text-gray-600/60'>Add guests</button>
                <div className='bg-[#ff5a60] rounded-full p-2 ml-4'>
                    <TbSearch className='text-white'/>
                </div>
            </div>
            {/* right */}
            <div className='flex items-center justify-center text-base gap-8'>
                <p className='font-semibold'>Airbnb your home</p>
                <TbWorld/>
                <div className='flex items-center gap-2 rounded-full px-4 py-2 border text-xl shadow-lg'>
                    <TbMenu2 className='cursor-pointer'/>
                    <TbUser className='cursor-pointer bg-gray-700 text-white rounded-full p-1 text-3xl'/>
                </div>
            </div>
        </div>
    )
}
