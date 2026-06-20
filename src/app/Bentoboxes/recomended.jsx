import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { hoverSpring } from '../utils/animation';



const Recomended = ({ recomended = [] }) => {



    return (
        <>
            {recomended.map((recomendedcourse, key) => (
                <motion.div {...hoverSpring} key={key} className="bg-card relative border-border border flex flex-col justify-between p-3 rounded-3xl shadow-md text-center w-full md:w-75 cursor-pointer hover:shadow-shadow">
                    <div>
                        <TrendingUp className='text-primary' />
                        <p className='absolute top-0 right-0 m-2 text-xs border border-gray-800  w-fit rounded-sm px-2 text-gray-400'>Recomended courses</p>
                        <div className="w-auto flex justify-center"><img src={recomendedcourse.pic} alt="photo" className="object-cover h-20 rounded-xl border border-slate-200" /></div>
                        <p className="text-lg font-bold my-2 text-left">{recomendedcourse.title}</p>
                    </div>


                    <button className="px-5 py-1 rounded-xl bg-primary text-background hover:bg-secondary cursor-pointer">Enroll</button>

                </motion.div>
            ))}
        </>
    )
}

export default Recomended