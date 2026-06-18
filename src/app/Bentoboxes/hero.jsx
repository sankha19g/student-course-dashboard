
import Streakpill from '../components/streakpill'

const Hero = () => {
  return (
    <div className="bg-purple-500 m-2 p-8 rounded-2xl shadow-md text-center flex flex-col justify-between w-full h-60 cursor-pointer hover:scale-101 transition-transform duration-300 hover:shadow-[0px_0px_15px_1px_rgba(64,128,128,0.7)]">
      <div className='flex flex-row justify-between'>
        <h1 className="text-4xl font-bold mb-4">Welcome back, [Name]</h1>
        <Streakpill className="" />
      </div>
      <div className='flex flex-row gap-3'>
        <p className='bg-blue-900/50 rounded-full px-5 py-1'>4 Active Courses</p>
        <p className='bg-blue-900/50 rounded-full px-5 py-1'>2 Pending Lessons</p>
      </div>
    </div>
  )
}

export default Hero
