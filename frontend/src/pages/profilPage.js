import React, {useContext } from 'react';
import Log from '../components/Log'
import '../styles/index.css'
import { UidContext } from "../components/AppContext"

function Profil() {
  const uid = useContext(UidContext)

  return (
    <div className="profil-page">
      {uid ? (
        <h1>Update Page</h1>
      ) : (
      <div className="log-container">
        <div className="log-gauche">
          <img src="./img/log-img.jpg" alt="log-img"/>
        </div>
        <div className="log-droite">
          <Log inscription={true} connexion={false}/>
        </div>
      </div>
      )}
    </div>
  )
}

export default Profil;
