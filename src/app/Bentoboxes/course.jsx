"use client"
import { BookText } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from "framer-motion"
import { hoverSpring } from '../utils/animation';

const Course = ({ courses = [] }) => {

  return (
    <>
      {courses.map((appliedcourse, key) => (

        <motion.div key={key} {...hoverSpring} className="relative bg-card border-border border flex flex-col justify-between p-3 rounded-3xl shadow-md text-center w-full md:w-78 md:h-40 cursor-pointer hover:shadow-shadow">
          <div>
            <BookText className='text-primary' />
            <p className='absolute top-0 right-0 m-2 text-xs border border-gray-800  w-fit rounded-sm px-2 text-gray-400'>Continue learning</p>
            <p className="text-xl text-text font-bold mb-2">{appliedcourse.title}</p>
          </div>

          {/* Progress bar */}
          <div className="mb-2 flex flex-col gap-2 text-left">
            <label>Progress: <CountUp end={appliedcourse.progress ?? 0} duration={10} />%</label>
            <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${appliedcourse.progress ?? 0}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </div>

        </motion.div>
      ))}
    </>
  );
}

export default Course
