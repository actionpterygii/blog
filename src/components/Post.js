import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function Post() {
  const {blogPost, fetchBlogPost} = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogPost(key);
  }, []);

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <div>{blogPost.content}</div>
    </div>
  );
}

export default Post;
