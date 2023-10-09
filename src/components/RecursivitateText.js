import React, { useState } from "react";
import { animate, motion } from "framer-motion"

const variants = {

    initial1: {
        opacity: 0,
        y: 400,
    },
    animate1: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .03,
        },
    },
}

export default function RecursivitateText() {
    
    const [hide1, setHide1] = useState(true);

    const handleClick1 = () => {
        setHide1(false)
    }

    let _btnClassName
    let _btnText
    if (hide1 === true) {
        _btnClassName = "btn1"
        _btnText = "Afișează!"
    } else {
        _btnClassName = "btn2"
        _btnText = ""
    }

    return (
        <div className="rec-test">
            <motion.section 
            className="rec-title test-title"
            variants={variants}
            initial="initial1"
            whileInView="animate1"
            viewport={{once: true}}
            >
                <span>Ultima problemă!</span>
                <p className="spec-title">// ușoară</p>
            </motion.section>
            <div className="enunt-container">
                <img src="./tiny-students.png" />
                <div className="enunt">
                    <p>Scrieți un algoritm pentru calcularea factorialului unui număr.</p>
                    <motion.div 
                            className={_btnClassName} 
                            onClick={handleClick1}
                        >
                            {
                                hide1 ? 
                                _btnText :
                                    <section className="rec--code-sample">
                                    <div className="rec--code-text">
                                        <p><span style={{fontStyle: 'italic', color: 'gray'}}> // răspuns:</span></p>
                                        <p>#include &lt;iostream&gt;</p>
                                        <p>using namespace std;</p>
                                        <p>int factorial(int n)｛</p>
                                        <p style={{marginLeft: 30}}>if (n &lt;= 0)｛</p>
                                        <p style={{marginLeft: 60}}>return 1;</p>
                                        <p style={{marginLeft: 30}}>｝else｛</p>
                                        <p style={{marginLeft: 60}}>return n * factorial(n - 1);</p>
                                        <p style={{marginLeft: 30}}>｝</p>
                                        <p>｝</p>
                                        <p><span style={{color: "blue"}}>int</span> main()｛</p>
                                        <p style={{marginLeft: 30}}><span style={{color: "blue"}}>int</span> n;</p>
                                        <p style={{marginLeft: 30}}>cin&gt;&gt;n;</p>
                                        <p style={{marginLeft: 30}}>cout&lt;&lt;factorial(n);</p>
                                        <p>｝</p>
                                    </div>
                                    </section>
                            }
                        </motion.div>
                    
                </div>
                
                
            </div>
            
        </div>
    )
}