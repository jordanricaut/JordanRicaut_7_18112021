import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../utils";
import EditDeleteCommentaire from "./EditDeleteCommentaire";

const CardCommentaire = ({ post }) => {
  const [text, setText] = useState("");
  const [commentaires, setCommentaires] = useState([]);
  const userData = useSelector((state) => state.userReducer);

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/post/${post.id}/commentaire/`,
        data: {
          postId: post.id,
          userNom: userData.nom,
          userPrenom: userData.prenom,
          message: text,
          userId: userData.id,
        },
      }).then((res) => {
        commentaires.push(res.data);
        setText("");
      });
    }
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}api/post/${post.id}`
      );
      setCommentaires(request.data[1]);
    }
    fetchData();
  }, [post.id]);

  return (
    <div className="commentaire-container">
      {commentaires.map((commentaire) => {
        return (
          <div key={commentaire.id}>
            <div className="card-commentaire">
              <div className="card-header">
                <div className="infos-user">
                  <h4>{commentaire.userNom}</h4>
                  <h4>{commentaire.userPrenom}</h4>
                </div>
                <span className="heure-post">Il y a {dateParser(commentaire.createdAt)}</span>
              </div>
              <p className="commentaire-message">{commentaire.message}</p>
              <EditDeleteCommentaire setCommentaires={setCommentaires} commentaires={commentaires} com={commentaire} post={post} />
            </div>
          </div>
        );
      })}
      {userData.id && (
        <form action="" onSubmit={handleComment} className="form-commentaire">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Laisser un commentaire"
          />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardCommentaire;
