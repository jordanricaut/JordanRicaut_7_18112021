import React, { useEffect } from 'react';
import "./connexion.css"

function ConnexionPage() {

  useEffect(() => {
    document.title = "Groupomania - Connexion ou Inscription"
  }, [])

  return (
    <h1>Groupomania Connexion</h1>
  );
}

export default ConnexionPage;
