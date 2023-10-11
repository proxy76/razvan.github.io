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
                    În fișierul <b>autor.in</b> se află în această ordine următoarele date: <b>numele</b> și <b>prenumele</b> unui autor, <b>anul nașterii</b>, <b>cartea de debut</b>, <b>anul debutului</b> și <b>numărul de critici literare</b> pe care le are cartea până în prezent. Fiecare cuvânt sau cifră sunt separate prin caracterul #. Să se afișeze în fișierul <b>autor.out</b> șirul scris astfel, cuvintele fiind separate prin spațiu: numele autorului, inițiala prenumelui autorului, anul debutului, carte de debut și anul nașterii.
                    <p>Exemplu: în fișierul <i>autor.in</i> se află <b>Creangă#Ion#1837#Soacra cu trei nurori#1875#80</b> și se va afișa în fișierul <i>autor.out</i> <b>Creangă I 1875 Soacra cu trei nurori 1835</b>.</p>
                </div>
                <img src="./red-img.png" />
                
            </div>
            
        </div>
    )
}