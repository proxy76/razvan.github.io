import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody'
import React, { useState } from 'react';
import './components/Subprograme.css'
import { Helmet } from 'react-helmet'

function App() {

  // schimba col
  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)
  const [color3, setColor3] = useState(false)
  const [color4, setColor4] = useState(false)
  const [color5, setColor5] = useState(false)
  const [color6, setColor6] = useState(false)
  const [color7, setColor7] = useState(false)
  const [color8, setColor8] = useState(false)
  const [color9, setColor9] = useState(false)
  const [color10, setColor10] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 500 && window.scrollY < 1300) {
      setColor1(true)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 1300 && window.scrollY < 2500){
      setColor2(true)
      setColor1(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 2500 && window.scrollY < 4000) {
      setColor1(false)
      setColor2(false)
      setColor3(true)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 4000 && window.scrollY < 5200) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(true)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 5200 && window.scrollY < 7850) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(true)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 7850 && window.scrollY < 8800) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(true)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 8800 && window.scrollY < 10800) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(true)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 10800 && window.scrollY < 12000) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(true)
      setColor9(false)
      setColor10(false)
    } else if (window.scrollY >= 12000 && window.scrollY < 15500) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(true)
      setColor10(false)
    } else if (window.scrollY >= 15500) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(true)
    } else {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      setColor9(false)
      setColor10(false)
    }
  }

  let _className;
  if (color1 === true) {
    _className = "App App-change-clr1"
  } else if (color2 === true) {
    _className = "App App-change-clr2"
  } else if (color3 === true) {
    _className = "App App-change-clr3"
  } else if (color4 === true) {
    _className = "App App-change-clr4"
  } else if (color5 === true) {
    _className = "App App-change-clr5"
  } else if (color6 === true) {
    _className = "App App-change-clr6"
  } else if (color7 === true) {
    _className = "App App-change-clr7"
  } else if (color8 === true) {
    _className = "App App-change-clr8"
  } else if (color9 === true) {
    _className = "App App-change-clr9"
  } else if (color10 === true) {
    _className = "App App-change-clr10"
  } else {
    _className = "App"
  }


  window.addEventListener('scroll', changeColor)

  return (
    <div className={_className}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <Navbar />
        <MainBody />
    </div>
    
  );
}

export default App;
