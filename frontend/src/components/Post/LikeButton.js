import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UidContext } from "../AppContext";

const LikeButton = ({ post, like }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);

  const handleLike = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/post/${post.id}/like`,
      withCredentials: true,
    })
      .then((res) => {
        setLiked(!liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    like.map((liker) => {
      if (liker.userId.includes(uid)) setLiked(true);
      else {
        setLiked(false);
      }
      return null;
    });
  }, [uid, like, liked]);

  return (
    <div className="like-container">
      {uid && liked === false && (
        <i className="far fa-heart" onClick={handleLike}></i>
      )}
      {uid && liked && <i className="fas fa-heart" onClick={handleLike}></i>}
    </div>
  );
};

export default LikeButton;
