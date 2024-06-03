import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import {Login, Register, Forgot, Dashboard} from './containers';
import {Strength } from './components';
import './App.css';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-pass' element={<Forgot/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Strength/>
    </BrowserRouter>
  )
}

export default App
//  useEffect(() => {
// document.documentElement.setAttribute('data-theme', theme)}, [theme]);