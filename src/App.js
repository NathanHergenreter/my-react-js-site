import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Calculator from "./Components/Calculator/Calculator";
import FunThingsHome from "./Components/FunThingsHome/FunThingsHome";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Components/Resume/Resume";
import TicTacToe from "./Components/TicTacToe/TicTacToe";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/fun-things" element={<FunThingsHome />} />
        <Route path="/fun-things/calculator" element={<Calculator />} />
        <Route path="/fun-things/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
