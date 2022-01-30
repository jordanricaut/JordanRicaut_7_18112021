import React, { useState } from "react";
import axios from "axios";

const ConnexionForm = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formErreur = document.querySelector(".form-erreur");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/connexion`,
      withCredentials: true,
      data: {
        email: email,
        mdp: mdp,
      },
    })
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        formErreur.innerHTML = "Votre email ou mot de passe n'est pas bon. Veuillez réessayer.";
      });
  };

  return (
    <form
      action=""
      onSubmit={handleLogin}
      id="connexion-form"
      className="log-form"
    >
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
      <input type="submit" className="btn_bleue mt-20" value="Se connecter" />
      <div className="form-erreur erreur"></div>
    </form>
  );
};

export default ConnexionForm;
