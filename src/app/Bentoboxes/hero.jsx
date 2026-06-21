"use client"
import { useState, useEffect } from 'react';
import Streakpill from '../components/streakpill';
import { supabase } from '@/api/client';
import { Sparkle } from 'lucide-react';
import CountUp from 'react-countup';


const Hero = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const { data, error } = await supabase.from("users").select("name").single();
      if (!error && data) {
        setName(data.name);
      }
    };
    fetchName();
  }, []);

  return (
    <div className="bg-card border-border border  p-3 md:p-8 rounded-3xl shadow-md text-center flex flex-col justify-between w-full h-60 cursor-pointer hover:shadow-shadow">
      <div className='flex flex-col md:flex-row md:justify-between'>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">
          Welcome back {name} !
        </h1>
        <Streakpill className="" />
      </div>
      <div className="flex flex-row justify-between">
        <div className='flex flex-col gap-2 w-fit'>
          <p className='bg-blue-900/30 rounded-full md:px-5 px-2 py-1 text-xs '>4 Active Courses</p>
          <p className='bg-blue-900/30 rounded-full md:px-5 px-2 py-1 text-xs'>2 Pending Lessons</p>
        </div>
        <div className='md:text-lg text-sm font-light italic text-slate-400 hover:border-slate-700 hover:border p-1 rounded-xl '>
          <p className='flex flex-row gap-1 items-center'> <Sparkle className='w-5 h-5 ' />Daily goal - <CountUp end={20} duration={3} /> / 50</p>
          <p className='flex flex-row gap-1 items-center'> <Sparkle className='w-5 h-5 ' />Total Points - <CountUp end={250} duration={2} /></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
