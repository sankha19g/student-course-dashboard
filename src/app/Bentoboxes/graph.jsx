
import Image from 'next/image';

const Graph = () => {
  return (
    <div className="bg-green-500 m-2 p-3 rounded-2xl shadow-md text-center sm:w-full md:w-80 cursor-pointer hover:scale-101 transition-transform duration-300 hover:shadow-[0px_0px_15px_1px_rgba(64,128,128,0.7)]">
      <Image 
        src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" 
        alt="Description" 
        width={500} 
        height={300}
        unoptimized
      />
    </div>
  )
}

export default Graph