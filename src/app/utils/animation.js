export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const hoverSpring = {
    whileHover: { scale: 1.01 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
    whileTap: { scale: 0.98 },
}


