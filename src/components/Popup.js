import React, { useState } from 'react'
import { animate, delay, motion } from "framer-motion"

const variants = {
    initial1: {
        opacity: 0,
        y: 400,
    },
    animate1: {
        opacity: 1,
        y: 0,
    },
}

export default function Popup2() {
    

    return(
        <motion.div
            className='popup2'
        >
            Treci întâi prin capitolul din urmă!
        </motion.div>
    )
}



