
import Image from 'next/image';

const Graph = () => {
  return (
    <div className="bg-green-500 m-2 p-3 rounded-2xl shadow-md text-center sm:w-full md:w-80 cursor-pointer  hover:shadow-shadow">
      <Image
        src=""
        alt="Description"
        width={500}
        height={300}
        unoptimized
      />
    </div>
  )
}

export default Graph
