import React from 'react'
import { Flame } from 'lucide-react';
import CountUp from 'react-countup';

const Streakpill = () => {
    return (
        <div className='h-8 w-fit px-2 md:w-40 flex items-center justify-center bg-red-500 gap-2 rounded-full hover:border-blue-950 hover:border transition-transform duration-300 '>
            <Flame className='w-5 h-5' />
            <p className='text-sm italic font-semibold'><CountUp end={14} duration={10} /> Day Streak</p>

        </div>
    )
}

export default Streakpill