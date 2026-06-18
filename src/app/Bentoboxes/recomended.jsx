import { BookText } from 'lucide-react';

const Recomended = () => {
    return (
        <div className="bg-blue-700 flex flex-col justify-between m-2 p-3 rounded-2xl shadow-md text-center w-35 md:w-60  md:h-50 cursor-pointer hover:scale-101 transition-transform duration-300 hover:shadow-[0px_0px_15px_1px_rgba(64,128,128,0.7)]">
            <div>
                <BookText />
                <p className="text-xl font-bold mb-2">Course 1</p>
            </div>

            {/* Progress bar here */}
            <button className="px-5 py-1 rounded-xl bg-black text-white">Enroll</button>

        </div>
    )
}

export default Recomended