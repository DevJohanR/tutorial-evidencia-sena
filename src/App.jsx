import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Preparacion from "./components/Preparacion/Preparacion";
import Encendido from "./components/Encendido/Encendido";
import Agradecimiento from "./components/Agradecimiento/Agradecimiento";

function App() {


  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={  <Home/>} />
      <Route path="/preparacion" element={  <Preparacion/>} />
      <Route path="/encendido" element={  <Encendido/>} />
      <Route path="/agradecimiento" element={  <Agradecimiento/>} />
      </Routes>
    </div>
  )
}

export default App
