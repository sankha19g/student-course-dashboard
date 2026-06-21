import Link from "next/link";
import { Filledboxesfunction, Unfilledboxesfunction } from "../components/activitymonthsboxes.jsx";


const Activity = () => {
    const prevmonths = ["May", "Jun"];
    const futuremonths = ["Jul"];



    return (
        <>
            <Link href="/activity">
                <div className=" bg-card border-border border w-full h-60  md:h-60 p-5 rounded-3xl  hover:shadow-shadow">
                    <h1 className='text-2xl font-semibold mb-2' > Your Activity</h1>
                    <div className=' flex flex-col gap-1  '>
                        <div className="grid grid-cols-3 gap-6 w-full overflow-hidden relative">
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
                        <div className="flex gap-2 items-center ">
                            <p className="text-xs text-gray-400">Less</p>
                            <div className="h-3 w-3 rounded-sm bg-slate-800/60"></div>
                            <div className="h-3 w-3 rounded-sm bg-emerald-900"></div>
                            <div className="h-3 w-3 rounded-sm bg-emerald-600"></div>
                            <div className="h-3 w-3 rounded-sm bg-emerald-400"></div>
                            <p className="text-xs text-gray-400">More</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Activity;