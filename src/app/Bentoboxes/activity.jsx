import { motion } from "framer-motion"
import { useMemo } from "react"

const Activity = () => {
    const totalBoxes = 70;
    //    random number between 0,1,2,3
    const activity = useMemo(() =>
        Array.from({ length: totalBoxes }, () =>
            Math.floor(Math.random() * 4)
        ), []);

    const intensities = {
        0: "bg-slate-800/60",
        1: "bg-emerald-900",
        2: "bg-emerald-600",
        3: "bg-emerald-400",
    };



    return (
        <div className="bg-card border-border border w-full h-60  md:h-60 p-5 rounded-3xl mt-2 hover:shadow-shadow">
            <h1 className='text-2xl font-semibold mb-2' > Your Activity</h1>
            <div className=' flex flex-row gap-4 justify-between '>
                <div>
                    <div className="flex flex-row justify-around pb-2">
                        <p className='text-xs text-gray-400'>April</p>
                        <p className='text-xs text-gray-400'>May</p>
                        <p className='text-xs text-white'>Jun</p>
                    </div>
                    <div className="grid grid-cols-14 gap-[3px] w-max pb-4 ">
                        {activity.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.02 }}
                                key={index}
                                className={`h-4 w-4 hover:border hover:border-white cursor-pointer rounded-sm ${intensities[item]}`}
                            ></motion.div>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <p className="text-xs text-gray-400">Less</p>
                        <div className="h-3 w-3 rounded-sm bg-slate-800/60"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-900"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-600"></div>
                        <div className="h-3 w-3 rounded-sm bg-emerald-400"></div>
                        <p className="text-xs text-gray-400">More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;