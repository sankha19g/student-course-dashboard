import React from 'react'

const CourseList = () => {
    return (
        <div className='w-full bg-amber-900 p-5 h-50 rounded-xl cursor-pointer hover:scale-101 transition-transform duration-300 hover:shadow-[0px_0px_15px_1px_rgba(64,128,128,0.7)]'>
            <p className='text-black text-lg font-bold'>Python</p>
            <p text>Duration: 60 Hrs</p>
            <p>Price: ₹2,000</p>
            <button className='bg-slate-700 rounded-full px-6 cursor-pointer hover:scale-101 transition-transform duration-300 mt-6 '>Enroll Now</button>
        </div>
    )
}

const CoursesPage = () => {
    return (
        <div className='w-full m-2'>
            <h1 className='text-5xl text-white m-4 text-center '>Explore Courses</h1>
            <div className="flex flex-col border border-white p-10   ">
                {/* search bar */}
                <div className="flex border border-white gap-2 p-2 rounded-xl">
                    <input className="text-black p-3 bg-amber-50 rounded-full " type="text" placeholder="Search" />

                    <button className='bg-slate-300 rounded-full px-6 cursor-pointer hover:scale-101 transition-transform duration-300 '>Search</button>
                    {/* Filter */}
                    <button className="px-6 rounded-xl bg-slate-500 cursor-pointer">Filter</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 '>
                    <CourseList />
                    <CourseList />
                    <CourseList />
                    <CourseList />
                    <CourseList />
                    <CourseList />
                    <CourseList />
                    <CourseList />

                </div>


            </div>
        </div>
    )
}

export default CoursesPage