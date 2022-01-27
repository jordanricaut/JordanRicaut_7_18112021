import React, { useContext } from "react";
import Log from "../components/Log";
import "../styles/index.css";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

function Profil() {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <div className="log-gauche">
            <img src="./img/log-img.png" alt="log-img" />
          </div>
          <div className="log-droite">
            <Log inscription={true} connexion={false} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;
