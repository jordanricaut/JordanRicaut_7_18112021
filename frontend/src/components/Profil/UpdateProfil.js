import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfil, updateProfil } from "../../actions/user.actions";
import { dateParser } from "../utils";
import cookie from "js-cookie";


const UpdateProfil = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    const formErreur = document.querySelector(".form-erreur");
    e.preventDefault();
    if (!email) {
      formErreur.innerHTML = "Mot de passe identique";
    } else {
      dispatch(updateProfil(userData.id, email));
      setFormSubmit(true);
      window.location.reload();
    }
  };

  const userData = useSelector((state) => state.userReducer);
  return (
    <React.Fragment>
      {formSubmit ? (
        <div className="profil">
          <h1> Votre profil</h1>
          <div className="profil-infos mt-20">
            <p>Prénom : {userData.prenom}</p>
            <p>Nom : {userData.nom}</p>
          </div>
          <p className="mt-10">
            Membre depuis le : {dateParser(userData.createdAt)}
          </p>

          <form
            action=""
            onSubmit={handleUpdate}
            id="update-profil-form"
            className="log-form"
          >
            <label htmlFor="email" className="gras">
              Modifier votre email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={userData.email}
            />
            <input
              type="submit"
              className="btn_bleue mt-20"
              value="Valider modification"
              onClick={handleUpdate}
            />
            <div className="form-succes">Modification réussie !</div>
          </form>
        </div>
      ) : (
        <div className="profil">
          <h1> Votre profil</h1>
          <div className="profil-infos mt-20">
            <p>Prénom : {userData.prenom}</p>
            <p>Nom : {userData.nom}</p>
          </div>
          <p className="mt-10">
            Membre depuis le : {dateParser(userData.createdAt)}
          </p>

          <form
            action=""
            onSubmit={handleUpdate}
            id="update-profil-form"
            className="log-form"
          >
            <label htmlFor="email" className="gras">
              Modifier votre email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={userData.email}
            />
            <input
              type="submit"
              className="btn_bleue mt-20"
              value="Valider modification"
              onClick={handleUpdate}
            />
            <div className="form-erreur erreur"></div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdateProfil;
