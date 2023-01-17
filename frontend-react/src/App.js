import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Blogs, Blog, Footer, Header, Associates, Testimonials, Services } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<><Header />
            <About />
            <Testimonials />
            <Services />
            <Footer />
            <Associates /></>} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;

