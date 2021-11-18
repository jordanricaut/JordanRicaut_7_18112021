import React, { useEffect } from 'react';
import "./inscription.css"

function InscriptionPage() {

  useEffect(() => {
    document.title = "Groupomania - Inscription"
  }, [])

  return (
    <h1>Groupomania Inscription</h1>
  );
}

export default InscriptionPage;
