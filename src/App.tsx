import React from 'react';
import Nav from './components/Nav/nav';
import { Route, Routes } from 'react-router-dom';
import About from './pages/AboutPage/about';
import Home from './pages/HomePage/home';
import Contact from './pages/ContactPage/contact';
import './App.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>

      </Routes>

    </div>

  )
}
