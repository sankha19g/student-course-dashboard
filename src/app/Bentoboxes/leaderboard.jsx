import React from 'react'
import { Users, Trophy } from "lucide-react"
import { hoverSpring } from '../utils/animation';
import { motion } from 'framer-motion';
import { supabase } from '@/api/client';
import { useState, useEffect } from 'react';

const Leaderboard = () => {
    return (
        <motion.div {...hoverSpring} className='bg-card border-border border w-full p-5 rounded-3xl mt-2 hover:shadow-shadow cursor-pointer'>
            <div className="flex flex-row justify-between">
                <h1 className='text-2xl font-semibold mb-4' > Leaderboard</h1>
                <Users className='text-white' />
            </div>
            <div className=" flex flex-col gap-3">
                <div className=" flex flex-row justify-between  hover:bg-slate-100/10 p-1 px-2 rounded-xl">
                    <div className="flex flex-row gap-3 items-center">

                        <p>1.</p>
                        <Trophy className='text-amber-500 ' size={20} />
                    </div>
                    <p>Harish</p>
                    <p>1000 pts</p>
                </div>
                <div className=" flex flex-row justify-between hover:bg-slate-100/10 p-1 px-2 rounded-xl">
                    <div className="flex flex-row gap-3 items-center">

                        <p>2.</p>
                        <Trophy className='text-gray-400' size={20} />
                    </div>
                    <p>Dharani</p>
                    <p>960 pts</p>
                </div>
                <div className=" flex flex-row justify-between hover:bg-slate-100/10 p-1 px-2 rounded-xl">
                    <div className="flex flex-row gap-3 items-center">

                        <p>3.</p>
                        <Trophy className='text-amber-800' size={20} />
                    </div>
                    <p>Kavin</p>
                    <p>800 pts</p>
                </div>

            </div>
        </motion.div>
    )
}

export default Leaderboard