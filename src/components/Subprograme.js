import React from "react";
import { animate, motion } from "framer-motion"

const variants = {

    initial1: {
        opacity: 0,
        x: -400,
    },
    animate1: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .11,
        },
    },

    initial2: {
        opacity: 0,
        x: -400,
    },
    animate2: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .25,
        },
    },
}

export default function Subprograme(){

    return (
        <motion.div 
            className="subprograme"
            // variants={variants}
            // initial="initial1"
            // whileInView="animate1"
            // viewport={{once: true,}}
            >
                <motion.section 
                    className="sp-title"
                    variants={variants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={{once: true,}}
                    >
                        <span>void</span> Subprograme()
                </motion.section>
                <motion.p 
                className="subtitle"
                variants={variants}
                initial="initial2"
                whileInView="animate2"
                viewport={{once: true,}}
                >
                    <p><img src='./question-mark.png' /><span>Ce erau subprogramele și la ce ne ajutau?</span></p>
                    <p><img src='./hashtag.png' /><span>Este important să știm că subprogramele sunt de două feluri, fiecare cu facilități specifice: 
                        <ul>
                            <li>cu tip (funcții) - pot <i><u>returna</u></i> valori</li>  
                            <li>fără tip (metode) - <i><u>execută</u></i> o serie de instrucțiuni la fiecare apel</li>  
                        </ul>
                        </span></p>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <section className="sp--code-sample">
                        <div className="sp--code-text">
                            <p>#include &lt;iostream&gt;</p>
                            <p></p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p></p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> suma(<span style={{color: "blue"}}>int</span> x, <span style={{color: "blue"}}>int</span> y)｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "red"}}>return</span> x + y; <span style={{fontStyle: 'italic', color: 'gray'}}> // returnează valoarea sumei celor două numere, adică int</span></p>
                            <p>｝</p>
                            <p><span style={{color: "blue"}}>void</span> execInstruct()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>int</span> a, b;</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;a&gt;&gt;b;</p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;suma(a, b);</p>
                            <p>｝</p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}>execInstruct();</p>
                            <p>｝</p>
                        </div>
                    </section> 
                </motion.p>

                <section className="sp-title param-title">
                    <span>void Parametrii</span>(char <span style={{fontWeight: 300}}>const</span>, float <span style={{fontWeight: 300}}>&ref</span>)
                </section>
                <motion.p className="subtitle2">
                    <p><img src='./question-mark.png' /><span>Care era diferența între parametru actual și cu referință? </span></p>
                    <p><img src='./hashtag.png' /><span>Una dintre diferențe este că paramentru cu referință reprezintă adresa din memoria RAM specifică unei variabile, iar atunci când se impune o modificare, aceasta va avea loc in memorie direct. </span></p>
                    <p><img src='./hashtag.png' /><span>De asemenea, este important să știm că în timp ce parametrii constanți pot primi o valoare de orice tip (deoarece se realizează conversie implicită), cei cu referință nu pot, deoarece aceia primesc <i>o adresă de memorie</i>. </span></p>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <div className="ex2">
                        <section className="sp--code-sample">
                            <div className="sp--code-text">
                                <p>#include &lt;iostream&gt;</p>
                                <p></p>
                                <p></p>
                                <p>using namespace std;</p>
                                <p></p>
                                <p></p>
                                <p><span style={{color: "blue"}}>void</span> addNum(<span style={{color: "blue"}}>int</span> &x, <span style={{color: "blue"}}>int</span> num, <span style={{color: "blue"}}>int</span> incr)｛</p>
                                <p style={{marginLeft: 30}}><span style={{color: "blue"}}>while</span> (incr &gt; 0)</p>
                                <p style={{marginLeft: 60}}>x += num, incr--;</p>
                                <p>｝</p>
                                <p><span style={{color: "blue"}}>int</span> main()｛</p>
                                <p style={{marginLeft: 30}}><span style={{color: "blue"}}>int</span> x, num, y;</p>
                                <p style={{marginLeft: 30}}>cout &lt;&lt;"Alege un număr: "; cin &gt;&gt;   x;</p>
                                <p style={{marginLeft: 30}}>cout &lt;&lt;"Cu cât să se incrementeze? "; cin &gt;&gt;   num;</p>
                                <p style={{marginLeft: 30}}>cout &lt;&lt;"De câte ori să se incrementeze? "; cin &gt;&gt;   y;</p>
                                <p style={{marginLeft: 30}}>addNum(x, num, y);</p>
                                <p style={{marginLeft: 30}}>cout &lt;&lt;"x: " &lt;&lt; x &lt;&lt; <span style={{color: "green"}}>endl</span> &lt;&lt; "y: " &lt;&lt; y &lt;&lt; <span style={{color: "green"}}>endl</span>;</p>
                                <p>｝</p>
                            </div>
                        </section> 
                        <section className="sp--code-solver">
                            <div className="sp--terminal-text">
                                <p>Alege un număr: 8</p>
                                <p>Cu cât să se incrementeze? 12</p>
                                <p>De câte ori să se incrementeze? 4</p>
                                <p>x: 56</p>
                                <p>y: 4</p>
                                <p>Process returned with code 0 (execution time: 0.0001s)</p>
                                <p></p>
                                
                            </div>
                        </section> 
                    </div>
                </motion.p>
        </motion.div>
        
    )
}