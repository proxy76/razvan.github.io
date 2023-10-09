import React, { useState } from "react";
import { animate, motion } from "framer-motion"
import ThemeChanger from "./ThemeChanger";

const fadeInAnimationVariants = {
    // c1
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
    
    // c2
    initial2: {
        opacity: 0,
        y: 400,
    },
    animate2: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .15,
        }
    },
    
    // c3
    initial3: {
        opacity: 0,
        x: -100,
    },
    animate3: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .25,
        }
    },

    // c4
    initial4: {
        opacity: 0,
        x: -100,
    },
    animate4: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .35,
        }
    },
}

export default function Navbar() {
    const [openTheme, setOpenTheme] = useState(false)

    return (
        <nav>
            <div>info</div>
            <img className=".menu" src='./menu-svgrepo-com.svg' onClick={() => setOpenTheme((prev) => !prev)}/>
            {
            openTheme &&
            <section className="selection">
                <div 
                    className="blue"
                    variants={fadeInAnimationVariants}
                    initial="initial1"
                    whileInView="animate1"
                ></div>
                <div 
                    className="black"
                    variants={fadeInAnimationVariants}
                    initial="initial2"
                    whileInView="animate2"
                ></div>
                <div 
                    className="light"
                    variants={fadeInAnimationVariants}
                    initial="initial3"
                    whileInView="animate3"
                ></div>
                <div 
                    className="pink"
                    variants={fadeInAnimationVariants}
                    initial="initial4"
                    whileInView="animate4"
                ></div>
            </section>
            }
        </nav>
    )
}