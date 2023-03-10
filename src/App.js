import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/products";
import Login from './components/Modal/Login/Login'

import "./assets/css/index.scss";
function App() {
  return (
    <>
      <Routes>
      <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
