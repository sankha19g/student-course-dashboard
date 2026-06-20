"use client";
import React from 'react'
import Hero from '../Bentoboxes/hero'
import Course from '../Bentoboxes/course'
import Activity from '../Bentoboxes/activity'
import Recomended from "../Bentoboxes/recomended"
import Leaderboard from '../Bentoboxes/leaderboard'
import { useState, useEffect } from 'react';
import HomeSkeleton from "../skeleton/homeskelleton"
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, hoverSpring } from '../utils/animation';
import { supabase } from '@/api/client';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    supabase.from("appliedcourses").select("*").then(({ data, error }) => {
      if (error) { console.error("Error fetching courses:", error.message); return; }
      setCourses(data ?? []);
    });

    supabase.from("recomendedcourse").select("*").then(({ data, error }) => {
      if (error) { console.error("Error fetching courses:", error.message); return; }
      setRecomended(data ?? []);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <HomeSkeleton /> : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-background mt-16 mb-16 md:mt-2 px-2">
          <section className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mr-2">
            <motion.div
              variants={fadeUp}
              {...hoverSpring}
              className="lg:col-span-3 md:col-span-2 col-span-1">
              <Hero />
            </motion.div>
            <motion.div
              variants={fadeUp}
              {...hoverSpring}
              className="lg:col-span-1 md:col-span-2 col-span-1">
              <Activity />
            </motion.div>
          </section>
          <section className="">
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2">
              <Course courses={courses} />
            </motion.div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2">
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:col-span-4">
              <Recomended recomended={recomended} />
              <Leaderboard />
            </motion.div>
          </section>
        </motion.div>
      )
      }
    </>
  )
}

export default Page
