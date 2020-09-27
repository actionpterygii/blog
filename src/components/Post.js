import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function Post() {
  const {blogPost, fetchBlogPost} = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogPost(key);
  }, []);

  if (blogPost.fetching) {
    return <div>よみこみちゅう</div>;
  } else {
    if (blogPost.success) {
      return (
        <div>
          <h2>{blogPost.title}</h2>
          <div>{blogPost.content}</div>
          <div>
            <a href={`/#/category/${blogPost.category.id}`}>
              {blogPost.category.name}
            </a>
          </div>
          <ul>
            {blogPost.tags.map((tag, i) => (
              <li key={i}>
                <a href={`/#/tags/${tag.id}`}>{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (blogPost.failed) {
      return <div>ないです</div>;
    } else {
      return <div>a</div>;
    }
  }
}

export default Post;
