import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ConnexionPage from './pages/connexion/connexionPage';
import InscriptionPage from './pages/inscription/inscriptionPage';
import AccueilPage from './pages/accueil/accueilPage'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/connexion" />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/accueil" element={<AccueilPage />} />
        </Routes>
      </Router>
  );
}

export default App;
