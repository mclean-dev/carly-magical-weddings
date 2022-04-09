import React from 'react';

import {About, Footer, Header, Skills, Testimonials, Services } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
        <Navbar /> 
        <Header />
        <About />
        <Testimonials />
        <Services />
        <Footer />
    </div>
  )
}

export default App;

