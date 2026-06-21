"use client";
import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function Filledboxesfunction() {

    const filledboxes = useMemo(() =>
        Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 4)
        ), []);

    const intensities = {
        0: "bg-slate-800/60",
        1: "bg-emerald-900",
        2: "bg-emerald-600",
        3: "bg-emerald-400",
    };
    return (
        <div className='grid grid-cols-5 gap-[3px] w-max pb-4'>
            {filledboxes.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.02 }}
                    key={index}
                    className={`h-4 w-4 hover:border hover:border-white cursor-pointer rounded-sm ${intensities[item]}`}
                ></motion.div>
            ))}
        </div>
    )
}

export function Unfilledboxesfunction() {

    const unfilledboxes = useMemo(() =>
        Array.from({ length: 30 }, () => 0)
        , []);

    const intensities = {
        0: "bg-slate-800/60",
    };
    return (
        <div className='grid grid-cols-5 gap-[3px] w-max pb-4'>
            {unfilledboxes.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.02 }}
                    key={index}
                    className={`h-4 w-4 hover:border hover:border-white cursor-pointer rounded-sm ${intensities[0]}`}
                ></motion.div>
            ))}
        </div>
    )
}
