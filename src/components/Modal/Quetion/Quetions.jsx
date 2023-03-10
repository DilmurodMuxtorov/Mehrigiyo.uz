import React from 'react'
import { Routes, Route } from "react-router";
import './Quetions.scss'
import Header from '../../header/header'
import Asked from '../../../pages/Home/_components/questions/asked'
import Footer from '../../../pages/Home/_components/footer/footer'

function Quetions() {
    return (
        <>
          <Header/>
          <Asked/>
          <Footer/>
        </>
    )
}

export default Quetions
