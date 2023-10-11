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

export default function SirCaract(){

    const [hide1, setHide1] = useState(true);

    const handleClick1 = () => {
        setHide1(false)
    }

    const newTab = (url) => {
        const newW = window.open(url, '_blank', 'noopener,noreferrer')
        if (newW) newW.opener = null
    }

    let _btnClassName
    let _btnText
    if (hide1 === true) {
        _btnClassName = "btn1"
        _btnText = "Afișează!"
    } else {
        _btnClassName = "btn1-rsp"
        _btnText = "O adresă din memoria RAM specifică unei variabile."
    }

    return (
        <motion.div
            className="sc"
            // variants={variants}
            // initial="initial1"
            // whileInView="animate1"
            // viewport={{once: true,}}
            >
                <motion.section 
                    className="sc-title"
                    variants={variants}
                    initial="initial1"
                    whileInView="animate1"
                    viewport={{once: true,}}
                    >
                        <span>char</span> Șiruri de caractere[];
                </motion.section>
                <motion.p 
                className="subtitle"
                variants={variants}
                initial="initial2"
                whileInView="animate2"
                viewport={{once: true,}}
                >
                    <p><img src='./question-mark.png' /><span>Ce sunt șirurile de caractere?</span></p>
                    <p><img src='./hashtag.png' /><span>Șirurile de caractere sunt reprezentați de o serie de variabile de tip char, a cărui punct de referință caracteristic este dat de adresa de memorie la care începe șirul.</span></p>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <section className="sc--code-sample">
                        <div className="sc--code-text">
                            <p>#include &lt;iostream&gt;</p>
                            <p></p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p></p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>char</span> s[];</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>int</span> n = 0;</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;s; <span style={{fontStyle: 'italic', color: 'gray'}}> // citește un șir de caractere până la primul caracter blank</span></p>
                            <p style={{marginLeft: 30}}>while (s[n] != '\0')｛ n++; ｝</p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;n; <span style={{fontStyle: 'italic', color: 'gray'}}> // afișează lungimea șirului</span></p>
                            <p>｝</p>
                        </div>
                    </section> 
                    <p className="met"><img src='./hashtag.png' /><span>Pentru a economisi timp, se folosesc metode ce facilitează anumite operații pe șirurile de caractere. Pentru a le accesa, avem nevoie să declarăm librăria <b>cstring</b>.</span></p>
                    <ul>
                        <li>strlen(char*) - return: int, lungimea șirului</li>
                        <li>strrev(char*) - return: *char, inversează șirul</li>
                        <li>strupr(char*) - return: *char, transformă literele mici în litere mari</li>
                        <li>strlwr(char*) - return: *char, transformă literele mari în litere mici</li>
                        <li>strchr(char*, char) - return: *char, caută într-un șir, un caracter</li>
                        <li>strstr(char*, char*) - return: *char, caută într-un șir, alt șir</li>
                        <li>strspn(char*, char*) - return: int, caută într-un șir, alt șir și afișează pe câte poziții se întinde</li>
                        <li><b>strtok(char*, const char*) / strtok(NULL, const char*)</b> - este folosit pentru împărțirea unui string mai mare în string-uri mai mici</li>
                    </ul>
                    <p><img src='terminal.png' /><span>Exemplu</span></p>
                    <section className="sc--code-sample2">
                        <div className="sc--code-text">
                            <p>#include &lt;iostream&gt;</p>
                            <p>#include &lt;cstring&gt;</p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p></p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>char</span> s[101];</p>
                            <p style={{marginLeft: 30}}>cin&gt;&gt;s;</p>
                            <p style={{marginLeft: 30}}>cout&lt;&lt;strlen(s); <span style={{fontStyle: 'italic', color: 'gray'}}> // afișează lungimea șirului</span></p>
                            <p>｝</p>
                            <p><span style={{fontStyle: 'italic', color: 'gray'}}> // algoritm echivalent celui din primul exemplu</span></p>
                        </div>
                    </section> 
                    <p><img src='terminal.png' /><span>Exemplu <i>strtok</i></span></p>
                    <section className="sc--code-sample2">
                        <div className="sc--code-text">
                            <p>#include &lt;iostream&gt;</p>
                            <p>#include &lt;cstring&gt;</p>
                            <p></p>
                            <p>using namespace std;</p>
                            <p></p>
                            <p></p>
                            <p><span style={{color: "blue"}}>int</span> main()｛</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>char</span> s[101];</p>
                            <p style={{marginLeft: 30}}>cin.getline(s, 101);</p>
                            <p style={{marginLeft: 30}}><span style={{color: "blue"}}>char</span> *p = strtok(s, " ");</p>
                            <p style={{marginLeft: 30}}>for(; p; p=strtok(NULL, " ")) cout&lt;&lt;strrev(p);<span style={{fontStyle: 'italic', color: 'gray'}}> // afișează șirul fără spații și fiecare cuvânt inversat</span></p>
                            <p>｝</p>
                            <p></p>
                        </div>
                    </section> 
                    <p className="pop-quiz1"><img src="./lightning.png" /><span>Amintește-ți!</span></p>
                    <p className="qa1"><img src="./question-mark.png" style={{marginLeft: 40}}/><span>Ce era un pointer?</span>
                        <motion.div 
                            className={_btnClassName} 
                            onClick={handleClick1}
                        >
                            {_btnText}
                        </motion.div>
                    </p>
                    <p className="qa1"><img src="./question-mark.png" style={{marginLeft: 40}}/><span>Alte exemple de metode din librăria <b>cstring</b>?</span>
                        <motion.div 
                            className="btn1" 
                            onClick={() => newTab("https://cplusplus.com/reference/cstring/")}
                        >
                            C++ Docs
                        </motion.div>
                    </p>
                </motion.p>
        </motion.div>   
    )
}