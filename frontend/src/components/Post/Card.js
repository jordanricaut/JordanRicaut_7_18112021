import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../utils";
import CardCommentaire from "./CardCommentaire";
import LikeButton from "./LikeButton";
import axios from "axios";
import { UidContext } from "../AppContext";
import { updatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";

const Card = ({ post }) => {
  const uid = useContext(UidContext);

  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [enChargement, setEnChargement] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState([]);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch()

  const updateItem = async () => {
    if (textUpdate) {
      dispatch(updatePost(post.id, textUpdate))
    }
    setIsUpdated(false)
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setEnChargement(false);
  }, [usersData]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}api/post/${post.id}`
      );
      setLike(request.data[2]);
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
              <span>Derniere MAJ le : {dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <p>255 caractères maximum</p>
                  <button className="btn" onClick={updateItem}>
                    Valider les modifications
                  </button>
              </div>
            )}
            {uid === post.userId && (
              <div className="button-container">
                <i
                  class="far fa-edit"
                  onClick={() => setIsUpdated(!isUpdated)}
                ></i>
                <DeleteCard post={post.id} />
              </div>
            )}
            {post.imageUrl && (
              <img src={post.imageUrl} alt="card-image" className="" />
            )}
            <div className="card-footer">
              <i
                onClick={() => setShowComments(!showComments)}
                class="far fa-comments"
              ></i>

              <LikeButton post={post} like={like} />
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
