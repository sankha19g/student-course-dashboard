import React from 'react';
import { motion } from 'framer-motion';

// Reusable Framer Motion pulse wrapper for skeleton elements
const Skeleton = ({ className }) => (
    <motion.div
        className={`bg-[#121b2e] rounded-md ${className}`}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

export default function HomeSkeleton() {
    return (
        <div className="min-h-screen bg-[#060b13] p-6 text-white space-y-6 select-none">

            {/* ================= TOP SECTION ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Welcome Banner Skeleton */}
                <div className="lg:col-span-3 bg-[#0c1322] border border-slate-900 rounded-3xl p-8 flex flex-col justify-between h-48">
                    <div className="flex justify-between items-start">
                        {/* "Welcome back, Name" line */}
                        <Skeleton className="h-9 w-64 rounded-xl" />
                        {/* Streak Pill */}
                        <Skeleton className="h-8 w-32 rounded-full bg-red-950/40" />
                    </div>
                    <div className="flex gap-3">
                        {/* Active/Pending Badges */}
                        <Skeleton className="h-8 w-36 rounded-full" />
                        <Skeleton className="h-8 w-36 rounded-full" />
                    </div>
                </div>

                {/* Activity Grid Skeleton */}
                <div className="bg-[#0c1322] border border-slate-900 rounded-3xl p-6 flex flex-col justify-between h-48">
                    <Skeleton className="h-6 w-20 rounded" />
                    {/* Contribution Heatmap Dots */}
                    <div className="grid grid-cols-11 gap-1.5 pt-4">
                        {Array.from({ length: 44 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className={`h-3 w-3 rounded-sm ${i % 3 === 0 ? 'bg-emerald-950/50' : 'bg-[#121b2e]'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* ================= MIDDLE SECTION (Progress Cards) ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-[#0c1322] border border-slate-900 rounded-3xl p-5 flex flex-col gap-6 h-40">
                        <div className="flex items-start gap-4">
                            <Skeleton className="h-6 w-6 rounded-md bg-sky-950/50" />
                            <div className="w-full flex justify-center">
                                <Skeleton className="h-7 w-28 rounded-lg" />
                            </div>
                        </div>
                        <div className="space-y-3 mt-auto">
                            <Skeleton className="h-4 w-28 rounded" />
                            <Skeleton className="h-2 w-full rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= BOTTOM SECTION (Course Grid) ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="bg-[#0c1322] border border-slate-900 rounded-3xl p-5 flex flex-col justify-between h-56">
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-6 rounded-md" />
                            <div className="flex justify-center">
                                <Skeleton className="h-6 w-24 rounded-lg" />
                            </div>
                        </div>
                        {/* Enroll Button Skeleton */}
                        <Skeleton className="h-10 w-full rounded-xl bg-cyan-950/40" />
                    </div>
                ))}
            </div>

        </div>
    );
}