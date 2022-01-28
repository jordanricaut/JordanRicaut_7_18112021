import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../../actions/user.actions";
import { dateParser, userDateParser } from "../utils";
import cookie from "js-cookie";
import axios from "axios";

const UpdateProfil = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [mdp, setMdp] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const removeCookie = (key) => {
      if (window !== "undefined") {
        cookie.remove(key, { expires: 1 });
      }
    };
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/user/${userData.id}`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  const handleUpdate = (e) => {
    e.preventDefault();
      dispatch(updateProfil(userData.id, mdp));
      setFormSubmit(true);
      window.location.reload();
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
              Modifier votre mot de passe
            </label>
            <input
              type="password"
              name="email"
              id="email"
              onChange={(e) => setMdp(e.target.value)}
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
            <p>Email : {userData.email}</p>
          </div>
          <p className="mt-10">
            Membre depuis le {userDateParser(userData.createdAt)}
          </p>
          <form
            action=""
            onSubmit={handleUpdate}
            id="update-profil-form"
            className="log-form"
          >
            <label htmlFor="email" className="gras">
              Modifier votre mot de passe
            </label>
            <input
              type="password"
              name="email"
              id="email"
              onChange={(e) => setMdp(e.target.value)}
            />
            <input
              type="submit"
              className="btn_bleue mt-20"
              value="Valider modification"
              onClick={handleUpdate}
            />
          </form>
          <button class="btn-delete" type="button" onClick={handleDelete}>
            Supprimer votre profil
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdateProfil;
