import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/post.actions";
import { getPosts } from "../../actions/posts.actions";
import { isEmpty } from "../utils";


const NouveauPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch()

  const handlePicture = (e) => {
      setPostImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0])
  };

  const handlePost = async () => {
    if (message || postImage) {
        const data = new FormData()
        data.append('userId', userData.id);
        data.append('message', message)
        if(file) data.append('imageUrl', file)
        await dispatch(addPost(data));
        dispatch(getPosts())
        annulerPost()
        

    } else {
        alert("Veuillez entrer un message")
    }
  };

  const annulerPost = () => {
    setMessage("");
    setPostImage("");
    setFile("");
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
  }, [userData]);

  return (
    <div className="nouveau-post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div className="post-form">
            <textarea
              name="message"
              id="id"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="footer-form">
            <div className="icon-image">
                <button type="button">
              <input
                type="file"
                id="file-upload"
                name="imageUrl"
                accept=".jpg, .jpeg, .png .gif"
                onChange={(e) => handlePicture(e)}
              />
              <img src="./img/icons/picture.svg" alt="imageUrl"/>
              </button>
            </div>
            <div className="btn-envoyer">
              {message || postImage ? (
                <button className="annuler-post" onClick={annulerPost}>
                  Annuler message
                </button>
              ) : null}

              <button className="envoie-post" onClick={handlePost}>
                Envoyer
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NouveauPost;
