import React from 'react'
import Hero from '../Bentoboxes/hero'
import Graph from '../Bentoboxes/graph'
import Course from '../Bentoboxes/course'
import Activity from '../Bentoboxes/activity'
import Recomended from "../Bentoboxes/recomended"

const Page = () => {
  return (
    <div className="bg-black ">
      <section className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mr-2">
        <div className="lg:col-span-3 md:col-span-2 col-span-1">
          <Hero />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1">
          <Activity />
        </div>
      </section>
      <section className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="flex w-full lg:col-span-4 md:col-span-3 grid-cols-1">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </section>
      <section className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        <div className='flex w-full lg:col-span-4 md:col-span-3 grid-cols-1'>
          <Recomended />
          <Recomended />
          <Recomended />
          <Recomended />
          <Recomended />
        </div>
      </section>
    </div>
  )
}

export default Page
