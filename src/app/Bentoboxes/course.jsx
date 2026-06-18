import { BookText } from 'lucide-react';

const Course = () => {
  return (
    <div className="bg-orange-500 flex flex-col justify-between m-2 p-3 rounded-2xl shadow-md text-center w-35 md:w-80  md:h-40 cursor-pointer hover:scale-101 transition-transform duration-300 hover:shadow-[0px_0px_15px_1px_rgba(64,128,128,0.7)]">
      <div>
        <BookText />
        <p className="text-xl font-bold mb-2">Course 1</p>
      </div>

      {/* Progress bar here */}
      <div className="mb-2 flex flex-col gap-2 text-left">
        <label >Progress: 70%</label>
        <progress className='h-1 rounded-full' value="70" max="100">70 %</progress>
      </div>

    </div>
  )
}

export default Course
