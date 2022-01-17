import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../utils";
import CardCommentaire from "./CardCommentaire";
import LikeButton from "./LikeButton";
import axios from "axios";

const Card = ({ post }) => {
  const [enChargement, setEnChargement] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState([])
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setEnChargement(false);
  }, [usersData]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${process.env.REACT_APP_API_URL}api/post/${post.id}`)
        setLike(request.data[2])
    }
    fetchData();
  }, [enChargement]);

  return (
    <li className="card-container" key={post.id}>
      {enChargement ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <React.Fragment>
          <div className="card">
            <div className="card-header">
              <div className="infos-user">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user.id === post.userId) return user.nom;
                    })}
                </h3>
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user.id === post.userId) return user.prenom;
                    })}
                </h3>
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            <p>{post.message}</p>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="card-image" className="" />
            )}
            <div className="card-footer">
              <i
                onClick={() => setShowComments(!showComments)}
                class="far fa-comments"
              ></i>
              <LikeButton post={post} like={like}/>
            </div>
            <div className="commentaire">
              {showComments && <CardCommentaire post={post} />}
            </div>
          </div>
        </React.Fragment>
      )}
    </li>
  );
};

export default Card;
