import React, { useState } from "react";
import InscriptionForm from "./inscriptionForm";
import ConnexionForm from "./connexionForm";

function Log(props) {
  const [inscriptionModal, setInscriptionModal] = useState(props.inscription);
  const [connexionModal, setConnexionModal] = useState(props.connexion);

  const handleModals = (e) => {
    if (e.target.id === "inscription") {
      setInscriptionModal(true);
      setConnexionModal(false);
    } else if (e.target.id === "connexion") {
      setInscriptionModal(false);
      setConnexionModal(true);
    }
  };

  return (
    <div className="connexion-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="inscription"
            className={inscriptionModal ? "active-button" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="connexion"
            className={connexionModal ? "active-button" : null}
          >
            Se connecter
          </li>
        </ul>
        {inscriptionModal && <InscriptionForm />}
        {connexionModal && <ConnexionForm />}
      </div>
    </div>
  );
}

export default Log;
