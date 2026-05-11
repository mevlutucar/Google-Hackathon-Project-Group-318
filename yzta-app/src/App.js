import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Principles from './pages/Principles';
import Members from './pages/Members';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="amac-ve-ilkeler" element={<Principles />} />
          <Route path="uyeler" element={<Members />} />
          <Route path="egitimler" element={<Trainings />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}