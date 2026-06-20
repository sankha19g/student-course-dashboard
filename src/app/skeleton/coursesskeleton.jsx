import { motion } from 'framer-motion';

const Skeleton = ({ className }) => (
    <motion.div
        className={`bg-[#121b2e] rounded-md ${className}`}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
);

const Coursesskeleton = () => {
    return (
        <div className="min-h-screen bg-[#060b13] p-6 text-white space-y-6 select-none mt-12">

            {/* Title */}
            <div className="flex justify-center">
                <Skeleton className="h-10 w-64 rounded-xl" />
            </div>

            {/* Search bar skeleton */}
            <div className="flex gap-2 border border-slate-800 p-3 rounded-xl justify-center">
                <Skeleton className="h-12 w-full md:w-150 rounded-full" />
                <Skeleton className="h-12 w-20 rounded-xl bg-cyan-950/40" />
            </div>

            {/* Course cards grid  */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-[#0c1322] border border-slate-900 rounded-xl p-4 flex flex-col gap-4 h-fit lg:w-75">
                        {/* Image  */}
                        <Skeleton className="w-full h-48 rounded-xl" />

                        {/* Enroll button */}
                        <Skeleton className="h-9 w-32 rounded-full bg-cyan-950/40" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coursesskeleton;