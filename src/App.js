import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FunThingsHome from "./Components/FunThingsHome/FunThingsHome";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun-things" element={<FunThingsHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
