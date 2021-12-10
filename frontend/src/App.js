import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ConnexionPage from './pages/connexion/connexionPage';
import InscriptionPage from './pages/inscription/inscriptionPage';
import AccueilPage from './pages/accueil/accueilPage'
import ErreurPage from './pages/erreur/Erreur'
import PostPage from './pages/post/postPage'
import ModifProfilPage from './pages/modif-profil/modifProfilPage'
import NouveauPostPage from './pages/nouveau-post/NouveauPostPage'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/connexion" />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/accueil" element={<AccueilPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/modification-profil" element={<ModifProfilPage />} />
          <Route path="/nouveau-post" element={<NouveauPostPage />} />
          <Route path="/modifier-post/:id" element={<NouveauPostPage />} />
          <Route path="*" element={<ErreurPage />} />
        </Routes>
      </Router>
  );
}

export default App;
