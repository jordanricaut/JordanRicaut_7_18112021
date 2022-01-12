import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import ConnexionForm from "./connexionForm";

const InscriptionForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [controlMdp, setControlMdp] = useState("");

  const handleIncription = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const formErreur = document.querySelector(".form-erreur");
    const mdpConfirmErreur = document.querySelector(".mdp-confirm-erreur");
    const termsErreur = document.querySelector(".terms-erreur");

    mdpConfirmErreur.innerHTML = "";
    termsErreur.innerHTML = "";

    if (mdp != controlMdp || !terms.checked) {
      if (mdp != controlMdp) {
        mdpConfirmErreur.innerHTML = "Les mots de passe ne correspondent pas";
      }
      if (!terms.checked) {
        termsErreur.innerHTML = "Merci de valider les conditions générales";
      }
    } else {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}api/user/inscription`,
        withCredentials: true,
        data: {
          nom: nom,
          prenom: prenom,
          email: email,
          mdp: mdp,
        },
      })
        .then((res) => {
          console.log(res);
          setFormSubmit(true)
        })
        .catch((err) => {
          formErreur.innerHTML = err;
        });
    }
  };

  return (
    <React.Fragment>
      {formSubmit ? (
        <React.Fragment>
          <ConnexionForm />
          <h4 className="inscription-succes">
            Inscription réussi, veuillez-vous connecter
          </h4>
        </React.Fragment>
      ) : (
        <form
          action=""
          onSubmit={handleIncription}
          id="inscription-form"
          className="log-form"
        >
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
          />
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            name="prenom"
            id="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="mdp">Mot de passe</label>
          <input
            type="password"
            name="mdp"
            id="mdp"
            onChange={(e) => setMdp(e.target.value)}
            value={mdp}
          />
          <label htmlFor="mdp-conf">Confirmer le mot de passe</label>
          <input
            type="password"
            name="mdp"
            id="mdp-conf"
            onChange={(e) => setControlMdp(e.target.value)}
            value={controlMdp}
          />
          <div className="mdp-confirm-erreur erreur"></div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="nooppener noreferrer">
                conditions générales
              </a>
            </label>
          </div>
          <div className="terms-erreur erreur"></div>
          <input
            type="submit"
            className="btn_bleue mt-20"
            value="Valider inscription"
          />
          <div className="form-erreur erreur"></div>
        </form>
      )}
    </React.Fragment>
  );
};

export default InscriptionForm;
