import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";
import { isEmpty } from "./utils";

const FilActu = () => {
  const [chargementPost, setChargementPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (chargementPost) {
      dispatch(getPosts());
      setChargementPost(false);
    }
  }, [chargementPost, dispatch]);

  return (
    <div className="filactu-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post.id}/>;
          })}
      </ul>
    </div>
  );
};

export default FilActu;
