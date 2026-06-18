import React from 'react'
import { Flame } from 'lucide-react';

const Streakpill = () => {
    return (
        <div className='h-10 w-40 flex items-center justify-center bg-red-500 gap-2 rounded-full hover:border-blue-950 hover:border transition-transform duration-300 '>
            <Flame />
            <p>14 Day Streak</p>

        </div>
    )
}

export default Streakpill