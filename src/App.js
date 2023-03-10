import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/products";
import Login from './components/Modal/Login/Login';
import Quetions from './components/Modal/Quetion/Quetions';
import Shop from './components/Modal/Shop/shop';
import Shoping from './components/Modal/Shopping/shopping';
 
import "./assets/css/index.scss";
function App() {
  return (
    <>
      <Routes>
      <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/quetions' element={<Quetions />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shoping' element={<Shoping />}/>
      </Routes>
    </>
  );
}

export default App;
