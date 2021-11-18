import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ConnexionPage from './pages/connexion/connexionPage';
import InscriptionPage from './pages/inscription/inscriptionPage';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/connexion" />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
        </Routes>
      </Router>
  );
}

export default App;
