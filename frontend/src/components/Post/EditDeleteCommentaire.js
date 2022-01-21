import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";

const EditDeleteCommentaire = ({
  setCommentaires,
  commentaires,
  com,
  post,
}) => {
  const [estAuteur, setEstAuteur] = useState(false);
  const uid = useContext(UidContext);


  const handleDelete = (e) => {
    window.confirm("Voulez-vous supprimer ce commentaire ?");
    e.preventDefault();
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/post/${post.id}/commentaire/${com.id}`,
    }).then((res) => {
      const newCommentaires = commentaires.filter(commentaire => commentaire.id !== res.data.id)
      setCommentaires(newCommentaires);
    });
  };

  useEffect(() => {
    const checkAuteur = () => {
      if (uid === com.userId) {
        setEstAuteur(true);
      }
    };
    checkAuteur();
  });

  return (
    <React.Fragment>
      {estAuteur && (
        <div className="button-container-commentaire">
          <i className="far fa-trash-alt" onClick={handleDelete}></i>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditDeleteCommentaire;
