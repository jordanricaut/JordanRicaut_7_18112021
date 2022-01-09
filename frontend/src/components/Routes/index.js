import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Accueil from '../../pages/acceuilPage'
import Profil from '../../pages/profilPage'

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Accueil />} />
        <Route path="/profil"  element={<Profil />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  )
}

export default Index;
