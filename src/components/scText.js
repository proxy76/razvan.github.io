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

export default function SirCaractText() {
    return (
        <div className="sc-test">
            <motion.section 
            className="sc-title test-title"
            variants={variants}
            initial="initial1"
            whileInView="animate1"
            viewport={{once: true}}
            >
                <span>Timpul pentru altă problemă!</span>
                <p className="spec-title">// mai grea</p>
            </motion.section>
            <div className="enunt-container">
                <div className="enunt">
                    În fișierul autor.in se află în această ordine următoarele date: numele și prenumele unui autor, anul nașterii, cartea de debut, anul debutului și numărul de critici literare pe care le are cartea până în prezent. Fiecare cuvânt sau cifră sunt separate prin caracterul #. Să se afișeze în fișierul autor.out șirul scris astfel, cuvintele fiind separate prin spațiu: numele autorului, inițiala prenumelui autorului, anul debutului, carte de debut și anul nașterii.
                    <p>Exemplu: în fișierul <i>autor.in</i> se află Creangă#Ion#1837#Soacra cu trei nurori#1875#80 și se va afișa în fișierul <i>autor.out</i> Creangă I 1875 Soacra cu trei nurori 1835.</p>
                </div>
                <img src="./red-img.png" />
                
            </div>
            
        </div>
    )
}