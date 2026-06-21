"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Filledboxesfunction, Unfilledboxesfunction } from "../components/activitymonthsboxes.jsx";


const Activitypage = () => {

    const filledmonths = 6;
    const boxespermonth = 30;

    //    random number between 0,1,2,3
    const filledboxes = useMemo(() =>
        Array.from({ length: boxespermonth }, () =>
            Math.floor(Math.random() * 4)
        ), []);

    const unfilledboxes = Array.from({ length: boxespermonth }, () => 0);

    const intensities = {
        0: "bg-slate-800/60",
        1: "bg-emerald-900",
        2: "bg-emerald-600",
        3: "bg-emerald-400",
    };

    const prevmonths = ["jan", "feb", "mar", "apr", "may", "jun"];
    const futuremonths = ["jul", "aug", "sep", "oct", "nov", "dec"];


    return (
        <div className='w-full flex flex-col items-center gap-10'>
            <div>
                <h1 className="text-4xl mt-20 md:mt-5 ml-10">Activity page</h1>
            </div>
            <div className="p-2  border rounded-xl m-2 border-slate-700 ">
                <div className='grid lg:grid-cols-12 md:grid-cols-6 grid-cols-3  gap-2 w-max pb-4 justify-center items-center'>
                    {prevmonths.map((month, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className="text-xs text-gray-400 text-center">{month}</div>
                            <Filledboxesfunction />
                        </div>
                    ))}


                    {futuremonths.map((month, index) => (
                        <div key={index} className='flex flex-col gap-2' >
                            <div className="text-xs text-gray-400 text-center">{month}</div>
                            <Unfilledboxesfunction />
                        </div>
                    ))}

                </div>

                <div className="flex gap-2 items-center justify-center mt-2">
                    <p className="text-xs text-gray-400">Less</p>
                    <div className="h-3 w-3 rounded-sm bg-slate-800/60"></div>
                    <div className="h-3 w-3 rounded-sm bg-emerald-900"></div>
                    <div className="h-3 w-3 rounded-sm bg-emerald-600"></div>
                    <div className="h-3 w-3 rounded-sm bg-emerald-400"></div>
                    <p className="text-xs text-gray-400">More</p>
                </div>

            </div>



        </div>
    )
}

export default Activitypage