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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setLiked(true);
  };

  const handleUnlike = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/post/${post.id}/like`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
    })
      .catch((err) => {
        console.log(err);
      });
      setLiked(false);
  };


  useEffect(() => {
    const likers = like.map((liker) => {
      if (liker.userId.includes(uid)) setLiked(true);
      else setLiked(false);
    });
  }, [uid, like, liked]);
  return (
    <div className="like-container">
      {uid && liked === false && (
        <i class="far fa-heart" onClick={handleLike}></i>
      )}
      {uid && liked && <i class="fas fa-heart" onClick={handleUnlike}></i>}
    </div>
  );
};

export default LikeButton;