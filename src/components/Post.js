import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {PATH} from "../config";
import useAPI from "../scripts/useAPI";

function Post() {
  const {blogPost, fetchBlogPost} = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogPost(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogPost.fetching ? (
        <div>よみこみちゅう</div>
      ) : blogPost.success ? (
        <div>
          <h2>{blogPost.title}</h2>
          <div>{blogPost.content}</div>
          <div>
            <a href={`${PATH}category/${blogPost.category.id}`}>
              {blogPost.category.name}
            </a>
          </div>
          <ul>
            {blogPost.tags.map((tag, i) => (
              <li key={i}>
                <a href={`${PATH}tag/${tag.id}`}>{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : blogPost.failed ? (
        <div>ないです</div>
      ) : (
        <div>待機中です</div>
      )}
    </div>
  );
}

export default Post;
