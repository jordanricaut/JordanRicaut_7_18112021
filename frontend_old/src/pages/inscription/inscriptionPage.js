import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InscriptionCSS from "./inscription.module.css"

import Text from '../../components/Formulaire/Text/Text'
import Bouton from '../../components/Formulaire/Bouton/Bouton'

import Logo from "../../assets/img/icon-above-font.svg"

function InscriptionPage() {
  useEffect(() => {
    document.title = "Groupomania - Inscription"
  }, [])

  const [data, setData] = useState({
    prenom: '',
    nom:'',
    email:'',
    mdp:''
  })

  return (
    <div className={InscriptionCSS.container}>
      <div className={InscriptionCSS.gauche}>
        <img src={Logo} alt="Logo"/>
        <h2> Restez connectez avec vos collègues</h2>
      </div>
      <div className={InscriptionCSS.droite}>
        <Text data={data} setData={setData} id="prenom" name="Prénom" label="Prénom" />
        <Text data={data} setData={setData} id="nom" name="Nom" label="Nom" />
        <Text data={data} setData={setData} id="email" name="email" label="Adresse e-mail"/>
        <Text data={data} setData={setData} id="mdp" name="mdp" label="Mot de passe" />
        <Bouton data={data} boutonTexte="S'inscrire" boutonId="inscription" css="btn_rouge"/>
        <Link to="/connexion">
        <p>Retour</p>
        </Link>
      </div>

    </div>
  );
}

export default InscriptionPage;
