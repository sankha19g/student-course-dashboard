"use client"
import { supabase } from "@/api/client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverSpring, fadeUp, staggerContainer } from "../utils/animation";


const Profile = () => {

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDetails = async () => {
        const { error, data } = await supabase.from("users").select("*").single();
        if (error) {
            console.error("error reading user details", error.message);
            setLoading(false);
            return;
        }
        setDetails(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center h-screen text-white text-2xl">
                Loading...
            </div>
        );
    }
    const name = details?.name
    const email = details?.email
    const phone = details?.phone
    const address = details?.address
    const city = details?.city
    const pin = details?.pin
    const country = details?.country
    const college = details?.college
    const course = details?.course
    const pic = details?.pic

    const detailStyle = "text-white  md:w-150 p-2 rounded-lg m-1 border border-slate-700 flex justify-between hover:bg-white/5 cursor-pointer";
    const detailspan = "text-blue-300";

    return (
        <>
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="w-full md:mx-6 my-10">
                <div className="w-full text-5xl text-white m-4 text-center">
                    <h1>Profile</h1>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:justify-between w-full  md:m-4 items-center">
                    <div className="flex flex-col gap-4">

                        <motion.div variants={fadeUp} className="flex flex-col w-full h-fit p-5 m-4 border border-slate-700 rounded-xl">
                            <h1 className='text-2xl mb-4'>
                                Personal Details
                            </h1>
                            <p className={detailStyle}>Name: <span className={detailspan}>{name ?? "—"}</span></p>
                            <p className={detailStyle}>Email: <span className={detailspan}>{email ?? "—"}</span></p>
                            <p className={detailStyle}>Phone: <span className={detailspan}>{phone ?? "—"}</span></p>
                            <p className={detailStyle}>Address: <span className={detailspan}>{address ?? "—"}</span></p>
                            <p className={detailStyle}>City: <span className={detailspan}>{city ?? "—"}</span></p>
                            <p className={detailStyle}>Pin: <span className={detailspan}>{pin ?? "—"}</span></p>
                            <p className={detailStyle}>Country: <span className={detailspan}>{country ?? "—"}</span></p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-col w-full h-fit p-5 m-4 border border-slate-700 rounded-xl">
                            <h1 className='text-2xl mb-4'>
                                Academic Details
                            </h1>
                            <p className={detailStyle}>College : <span className={detailspan}>{college ?? "—"}</span></p>
                            <p className={detailStyle}>Course : <span className={detailspan}>{course ?? "—"}</span></p>
                        </motion.div>

                    </div>
                    <motion.div {...hoverSpring} className="border border-slate-800 rounded-xl h-50 w-60 flex items-center justify-center m-4 p-4">
                        <img src={pic} alt="ProfilePic" className='w-full h-full object-cover rounded-md cursor-pointer ' />
                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}

export default Profile;

