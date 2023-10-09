import React, { useState } from "react";
import { animate, motion } from "framer-motion"

const variants = {

    initial1: {
        opacity: 0,
        x: -100,
    },
    animate1: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .40,
        },
    },

    initial2: {
        opacity: 0,
        x: -100,
    },
    animate2: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .50,
        },
    },

    initial3: {
        opacity: 0,
        x: -400,
    },
    animate3: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .01,
        },
    },
}

export default function Struct(){


    return (
        <motion.div
            className="struct">
                <motion.section 
                    className="struct-title"
                    variants={variants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={{once: true,}}
                    >
                        <span>struct</span> Înregistrări｛ ｝;
                </motion.section>
                <motion.p 
                className="subtitle"
                variants={variants}
                initial="initial2"
                whileInView="animate2"
                viewport={{once: true,}}
                >
                    <p><img src='./question-mark.png' /><span>La ce ajută înregistrările?</span></p>
                    <p><img src='./hashtag.png' /><span>Înregistrările sunt locul unde sunt stocate părți individuale de informații. Fiecare înregistrare constă într-unul sau mai multe câmpuri. Avantajul pe care îl oferă acestea este reprezentat de faptul că programatorul poate gestiona o masă mare de informație cu mult mai multă ușurință, și în plus, codul poate fi mai bine înțeles.</span></p>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <div className="ex3">
                    <section className="struct--code-sample">
                        <div className="struct--code-text">
                            <p>#include &lt;iostream&gt;</p>
                            <p></p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p>struct Elev｛ char prenume[51]; double medie; ｝;</p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>Elev</span> e;</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;e.prenume&gt;&gt;e.medie; <span style={{fontStyle: 'italic', color: 'gray'}}> // accesarea de câmpuri se face prin caracterul '.'</span></p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;e.medie&lt;&lt;' '&lt;&lt;e.prenume&lt;&lt;'\n';</p>
                            <p>｝</p>
                        </div>
                    </section> 

                    <section className="sp--code-solver">
                            <div className="sp--terminal-text">
                                <p>Ionel</p>
                                <p>9.61</p>
                                <p>9.61 Ionel</p>
                                <p>Process returned with code 0 (execution time: 0.0001s)</p>
                                <p></p>
                            </div>
                    </section> 
                    </div>
                    <p><img src='./hashtag.png' /><span>Înregistrările pot fi declarate fie global, fie local. De asemenea, acestea au o aplicabilitate deosebită în cadrul problemelor care necesită folosirea diferitelor tipuri de date în vectori.</span></p>
                    
                    <div className="ex4">
                    <section className="struct--code-sample">
                        <div className="struct--code-text">
                            <p><span style={{fontStyle: 'italic', color: 'gray'}}>// adaptare la problema precedentă</span></p>
                            <p>#include &lt;iostream&gt;</p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p>struct｛ char prenume[51]; double medie; ｝ e[3];</p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p>for (int i = 0; i &lt; 3; i++)</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;e[i].prenume&gt;&gt;e[i].medie;</p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;e.medie&lt;&lt;' '&lt;&lt;e.prenume&lt;&lt;'\n';</p>
                            <p>｝</p>
                        </div>
                    </section> 

                    <section className="sp--code-solver">
                            <div className="sp--terminal-text">
                                <p>Ionel</p>
                                <p>9.56</p>
                                <p>9.56 Ionel</p>
                                <p>Alex</p>
                                <p>8.90</p>
                                <p>8.90 Alex</p>
                                <p>Ana</p>
                                <p>8.20</p>
                                <p>8.20 Ana</p>
                                <p>Process returned with code 0 (execution time: 0.0001s)</p>
                                <p></p>
                            </div>
                    </section> 
                    </div>

                </motion.p>
        </motion.div>   
    )
}