import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = ({ post }) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(post));

  return (
    <React.Fragment>
      <i
        class="far fa-trash-alt"
        onClick={() => {
          if (window.confirm("Voulez-vous supprimer ce post ?")) {
            {
              deleteQuote();
            }
          }
        }}
      ></i>
    </React.Fragment>
  );
};

export default DeleteCard;
