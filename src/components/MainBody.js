import React, { useState } from "react";
import { animate, motion } from "framer-motion"
import Popup2 from "./Popup";
import Popup3 from "./Popup2";
import Popup4 from "./Popup3";
import Subprograme from './Subprograme'
import SubprogrameTest from "./SubprogrameText";
import SirCaract from "./sc";
import SirCaractText from "./scText";
import './sc.css'
import Struct from "./Struct";
import './Struct.css'
import StructText from "./StructText";
import Recursivitate from "./Recursivitate";
import './Recursivitate.css'
import RecursivitateText from "./RecursivitateText";
import End from "./End";
import './End.css'

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
    
    // main text title 
    initial2: {
        opacity: 0,
        y: 400,
    },
    animate2: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .1,
        }
    },
    
    // scroll text
    initial3: {
        opacity: 0,
        x: -100,
    },
    animate3: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .5,
        }
    },

    // second img
    initial4: {
        opacity: 0,
        x: -100,
    },
    animate4: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.75,
        }
    },

    // first li
    initial5: {
        opacity: 0,
        x: -100,
    },
    animate5: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
        }
    },

    // second li
    initial6: {
        opacity: 0,
        x: 100,
    },
    animate6: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.25,
        }
    },

    // third li
    initial7: {
        opacity: 0,
        x: -100,
    },
    animate7: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.50,
        }
    },

    // fourth li
    initial8: {
        opacity: 0,
        x: 100,
    },
    animate8: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.75,
        }
    },

    // rem title
    initial9: {
        opacity: 0,
        y: 100,
    },
    animate9: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .01,
        }
    },
}

export default function MainBody() {
    const [isShow2, setShow2] = useState(false)
    const [isShow3, setShow3] = useState(false)
    const [isShow4, setShow4] = useState(false)

    const handleClick2 = () => {
        setShow2(true)
        setTimeout(() => {
            setShow2(false)
        }, 1500);
    }
    const handleClick3 = () => {
        setShow3(true)
        setTimeout(() => {
            setShow3(false)
        }, 1500);
    }
    const handleClick4 = () => {
        setShow4(true)
        setTimeout(() => {
            setShow4(false)
        }, 1500);
    }
    

    return (
        <div className="overall">
            <div className="main">
                <motion.img 
                    src="./boy-studying.png" className="vector--boy"
                    variants={fadeInAnimationVariants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={
                        {once: true,}
                    }
                    />
                <div className="box--motd">
                    <motion.section 
                        className="info--motd"
                        variants={fadeInAnimationVariants}
                        initial="initial2"
                        whileInView="animate2"
                        viewport={
                            {once: true,}
                        }
                        >
                            <pre>Clasa a 10-a</pre><span className="span--motd">In a Nutshell</span>
                    </motion.section>
                    <motion.section
                        className="scroll--motd"
                        variants={fadeInAnimationVariants}
                        initial="initial3"
                        whileInView="animate3"
                        viewport={{once: true,}}
                        >
                            scroll pentru a începe!
                    </motion.section>
                </div>
            </div>

            <motion.div className="remember">
                    <motion.p
                        variants={fadeInAnimationVariants}
                        initial="initial9"
                        whileInView="animate9"
                        viewport={
                            {once: true,}
                        }>
                            Să ne amintim!
                    </motion.p>
                    <motion.img
                        variants={fadeInAnimationVariants}
                        initial="initial4"
                        whileInView="animate4"
                        viewport={
                            {once: true,}
                        }
                        src='./boy.png' />
                    
                    <motion.ul>
                        <motion.li 
                            className='s1'
                            variants={fadeInAnimationVariants}
                            initial="initial5"
                            whileInView="animate5"
                            viewport={{once: true,}}
                            >
                                Subprograme
                        </motion.li>
                        <motion.li 
                            className='s2'
                            variants={fadeInAnimationVariants}
                            initial="initial6"
                            whileInView="animate6"
                            viewport={{once: true,}}
                            onClick={handleClick2}
                            >
                                {
                                    isShow2 && <Popup2 />
                                }
                                Șiruri de caractere
                        </motion.li>
                        <motion.li 
                            className='s3'
                            variants={fadeInAnimationVariants}
                            initial="initial7"
                            whileInView="animate7"
                            viewport={{once: true,}}
                            onClick={handleClick3}
                            >
                                {
                                    isShow3 && <Popup3 />
                                }
                                Înregistrări
                        </motion.li>
                        <motion.li 
                            className='s4'
                            variants={fadeInAnimationVariants}
                            initial="initial8"
                            whileInView="animate8"
                            viewport={{once: true,}}
                            onClick={handleClick4}
                            >
                                {
                                    isShow4 && <Popup4 />
                                }
                                Recursivitate
                        </motion.li>
                    </motion.ul>
            </motion.div>

            <div className="continuare">
                <Subprograme />
                <SubprogrameTest />
                <SirCaract />
                <SirCaractText />
                <Struct />
                <StructText />
                <Recursivitate />
                <RecursivitateText />
                <End />
            </div>
        </div>
    )
}