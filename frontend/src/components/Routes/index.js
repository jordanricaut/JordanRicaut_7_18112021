import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Accueil from '../../pages/acceuilPage'
import Profil from '../../pages/profilPage'
import Navbar from '../../components/Navbar'

function Index() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Accueil />} />
        <Route path="/profil"  element={<Profil />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  )
}

export default Index;
