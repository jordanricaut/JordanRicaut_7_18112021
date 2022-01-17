import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../utils";
import { dateParser } from "../utils";

const CardCommentaire = ({ post }) => {
  const [text, setText] = useState("");
  const [commentaires, setCommentaires] = useState([]);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const commentairesData = useSelector((state) => state.commentairesReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}api/post/${post.id}`
      );
      setCommentaires(request.data[1]);
    }
    fetchData();
  }, []);

  return (
    <div className="commentaire-container">
      {commentaires.map((commentaire) => {
        return (
          <React.Fragment>
            <div className="card-commentaire">
              <div className="card-header">
                <div className="infos-user">
                  <h4>{commentaire.userNom}</h4>
                  <h4>{commentaire.userPrenom}</h4>
                </div>
                <span>{dateParser(post.createdAt)}</span>
              </div>
              <p className="commentaire-message">{commentaire.message}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CardCommentaire;
