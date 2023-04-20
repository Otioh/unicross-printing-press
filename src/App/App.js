import React from 'react';
import { Route, Routes } from "react-router-dom";

import Index from './Components/Index';
import NotFound from './Components/NotFound';
import Order from './Components/Order';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
function Entry() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/welcome" element={<Index />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Entry