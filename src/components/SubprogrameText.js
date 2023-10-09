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

export default function SubprogrameTest() {
    return (
        <div className="sp-test">
            <motion.section 
            className="sp-title test-title"
            variants={variants}
            initial="initial1"
            whileInView="animate1"
            viewport={{once: true}}
            >
                <span>Problem solving TIME!</span>
            </motion.section>
            <div className="enunt-container">
                <img src="./study-online.png" />
                <div className="enunt">
                    În IDE-ul pe care îl aveți pus la dispoziție, creați un program C/C++ și realizați următoarele task-uri:
                    <ul>
                        <li>Creați un subprogram care să returneze 1, dacă un număr este prim, sau 0 în caz contrar.</li>
                        <li>Creați un subprogram care să modifice in memorie un vector de numere întregi, astfel încât numerele prime să fie pe poziții impare, iar cele neprime, pe poziții pare.</li>
                        <li><img src='./lightning.png' />Creați un subprogram prototip care să citească dintr-un fișier vector.in un șir de numere întregi și să execute task-ul precedent. Ulterior, afișați pe ecran pentru fiecare număr neprim, cel mai apropiat număr prim.</li>
                        <li><img src='./question-mark.png' />Este programul vostru eficient? Argumentați într-un comentariu de tip extins la finalul programului.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}