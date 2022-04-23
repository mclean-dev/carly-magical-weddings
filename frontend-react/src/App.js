import React from 'react';

import {About, Footer, Header, Associates, Testimonials, Services } from './container';
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
        <Associates />
    </div>
  )
}

export default App;

