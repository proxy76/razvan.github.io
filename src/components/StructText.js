import React from "react";
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

export default function StructText() {
    
    const newTab = (url) => {
        const newW = window.open(url, '_blank', 'noopener,noreferrer')
        if (newW) newW.opener = null
    }
    
    return (
        <div className="struct-test">
            <motion.section 
            className="struct-title test-title"
            variants={variants}
            initial="initial1"
            whileInView="animate1"
            viewport={{once: true}}
            >
                <span>Adaptare de problemă!</span>
                <p className="spec-title">// grea</p>
            </motion.section>
            <div className="enunt-container">
                <div className="enunt">
                    În fișierul autor.in se află n linii, fiecare conținând în această ordine următoarele date: numele și prenumele unui autor, anul nașterii, cartea de debut, anul debutului și numărul de critici literare pe care le are cartea până în prezent. Fiecare cuvânt sau cifră sunt separate prin caracterul '#'. Să se afișeze în fișierul autor.out ordonați alfabetic după titlul cărții de debut, în această ordine: inițiala prenumelui autorului, numele autorului scris cu majuscule, secolul și deceniul în care s-a născut separate prin caracterul '@', oglinditul anului de debut, titlul cărții de debut în codul ASCII și cel mai apropiat număr prim de numărul de critici literare.
                    <p>Este sugerată aplicarea tuturor noțiunilor recapitulate precedent și folosirea librăriei <b>cstdlib</b>.</p>
                    <motion.p 
                            className="btn1" 
                            onClick={() => newTab("https://cplusplus.com/reference/cstdlib/")}
                        >
                            C++ Docs
                    </motion.p>
                </div>
                <img src="./purple-laptop.png" />
                
            </div>
            
        </div>
    )
}