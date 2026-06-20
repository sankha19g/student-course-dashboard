"use client"
import { Search } from 'lucide-react';
import { supabase } from '@/api/client';
import { useState, useEffect } from 'react';
import { fadeUp, staggerContainer, hoverSpring } from '../utils/animation';
import { motion } from "framer-motion";
import Coursesskeleton from '../skeleton/coursesskeleton';

const CoursesPage = () => {
    const [getCourse, setGetCourse] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);

        supabase.from("buycourse").select("*").then(({ data, error }) => {
            if (error) { console.error("Error fetching courses:", error.message); return; }
            setGetCourse(data ?? []);
        });
        return () => clearTimeout(timer);

    }, []);

    const searchCourse = async () => {
        const { data, error } = await supabase.from("buycourse").select("*").ilike("title", `%${search}%`);
        if (error) { console.error("Error fetching courses:", error.message); return; }
        setGetCourse(data ?? []);
    }

    return (
        <>
            {loading ? <Coursesskeleton /> : (

                <div className='w-full m-2 mt-12 mb-15'>
                    <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className='text-5xl text-white m-4 text-center '>Explore Courses</motion.h1>
                    <div className="flex flex-col border border-border p-4 md:p-10  rounded-xl  ">
                        {/* search bar */}
                        <div className="flex border border-border gap-2 p-2 rounded-xl justify-center ">
                            <motion.div variants={fadeUp} initial="hidden" animate="visible" className=" border border-slate-700 rounded-full flex items-center p-1 ">
                                <input onChange={(e) => setSearch(e.target.value)} className="text-white p-3  rounded-l-full w-full md:w-150 outline-none " type="text" placeholder="Search" />
                                <button onClick={searchCourse} className='bg-secondary rounded-full h-full w-11 p-2 my-1 cursor-pointer hover:scale-101 transition-transform duration-300 '><Search /></button>
                            </motion.div>
                            {/* Filter */}
                            <motion.button variants={fadeUp} initial="hidden" animate="visible" className="px-6 rounded-xl bg-secondary cursor-pointer">Filter</motion.button>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 '>
                            {getCourse.map((buycourse, key) => (
                                <motion.div
                                    variants={fadeUp}
                                    {...hoverSpring}
                                    key={key}
                                    className='w-full flex flex-row md:flex-col md:justify-between bg-card border-border border py-2 px-2 md:p-5 h-fit rounded-xl cursor-pointer  hover:shadow-shadow'>
                                    <div className='w-40 h-30 md:w-full md:h-48 border border-border rounded-xl overflow-hidden'>
                                        <img src={buycourse.pic} alt="coursepic" className='rounded-xl object-cover w-full h-full' />
                                    </div>
                                    <div className='md:py-2 px-3'>
                                        <p className='text-white text-lg font-bold'>{buycourse.title}</p>
                                        <p>Duration: {buycourse.time}</p>
                                        <p>Price: {buycourse.price}</p>
                                        <button className='bg-secondary rounded-full px-6 cursor-pointer hover:border-white hover:border mt-6 '>Enroll Now</button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            )}
        </>
    )
}

export default CoursesPage