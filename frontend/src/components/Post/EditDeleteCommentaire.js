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
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const idCommentaire = document.querySelector(".card-commentaire")

  const handleEdit = (e) => {
    e.preventDefault();
    if (text) {
      axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}api/post/${post.id}/commentaire/${com.id}`,
        data: {
          message: text,
        },
      }).then((res) => {
        console.log(res);
        setEdit(!edit);
      });
    }
  };

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
      {estAuteur && edit === false && (
        <div className="button-container-commentaire">
          <i class="far fa-edit" onClick={() => setEdit(!edit)}></i>
          <i class="far fa-trash-alt" onClick={handleDelete}></i>
        </div>
      )}
      {estAuteur && edit && (
        <div className="modif-delete-commentaire">
          <form action="" onSubmit={handleEdit} className="">
            <input
              type="text"
              name="text"
              oncChange={(e) => setText(e.target.value)}
              defaultValue={com.message}
            />
            <input type="submit" value="Valider modification" />
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditDeleteCommentaire;
