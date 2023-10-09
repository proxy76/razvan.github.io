import React from "react";
import { animate, motion } from "framer-motion"

const fadeInAnimationVariants = {
    // main img
    initial1: {
        opacity: 0,
        y: 400,
    },
    animate1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .05,
        },
    },
}

export default function End(){
    return (
        <div className="main--end">
                <motion.section 
                    className="info--end"
                    variants={fadeInAnimationVariants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={
                        {once: true,}
                    }
                    >
                        SFÂRȘITUL PREZENTĂRII
                </motion.section>

                <motion.img 
                    src="./boy-pc.png" className="pc--boy"
                    variants={fadeInAnimationVariants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={
                        {once: true,}
                    }
                />

            </div>
    )
}