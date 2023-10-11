import React, { useState } from "react"
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

export default function Recursivitate() {
    return (
        <div className="rec">
            <motion.section 
                    className="rec-title"
                    variants={variants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={{once: true,}}
                    >
                        <span><img src='./curved-arrow.png' /></span> Recursivitate()
            </motion.section>
            <motion.p 
                className="subtitle"
                variants={variants}
                initial="initial2"
                whileInView="animate2"
                viewport={{once: true,}}
            >
                    <p><img src='./question-mark.png' /><span>În ce constă recursivitatea?</span></p>
                    <p><img src='./hashtag.png' /><span>Recursivitatea este un mod de a defini unele funcții. Funcția este recursivă, dacă definiția ei folosește o referire la ea însăși, creând la prima vedere un cerc vicios. Un exemplu faimos din matematică este șirul lui Fibonacci.</span></p>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <section className="rec--code-sample">
                        <div className="rec--code-text">
                            <p><span style={{fontStyle: 'italic', color: 'gray'}}> // termenul n din șirul lui Fibonacci</span></p>
                            <p>#include &lt;iostream&gt;</p>
                            <p>using namespace std;</p>
                            <p><span style={{color: "blue"}}>int</span> fib(<span style={{color: "blue"}}>int</span> n)｛</p>
                            <p style={{marginLeft: 30}}>if (n == 1 || n == 2)｛</p>
                            <p style={{marginLeft: 60}}><span style={{color: "red"}}>return</span> 1;</p>
                            <p style={{marginLeft: 30}}>｝</p>
                            <p style={{marginLeft: 30}}><span style={{color: "red"}}>return</span> fib(n - 1) + fib(n - 2);</p>
                            <p>｝</p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>int</span> n;</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;n;</p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;fib(n);</p>
                            <p>｝</p>
                        </div>
                    </section>
                    <p><img src='./hashtag.png' /><span>Acesta este un algoritm corect, dar nu este eficient din cauza faptului că în timp ce se calculează un fib(x), sunt apelate si funcțiile fib(x-1) și fib(x-2). Cu cât n este mai mare, cu atât timpul de execuție crește exponențial.</span></p>
                    <p><img src='./hashtag.png' /><span>Exemple interesante ale recursivității sunt reprezentați de fractali.</span></p>
                    <div className="fract">
                        <img src='image1.png' />
                        <img src='image2.png' />
                    </div>
            </motion.p>
        </div>
    )
}