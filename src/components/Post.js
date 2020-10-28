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
        <div className="loading">よみこみちゅう</div>
      ) : blogPost.success ? (
        <div className="post">
          <h2 className="postTitle">{blogPost.title}</h2>
          <div className="postContent">{blogPost.content}</div>
          <div className="postCategory">
            <p>カテゴリー</p>
            <a href={`${PATH}category/${blogPost.category.id}`}>
              {blogPost.category.name}
            </a>
          </div>
          <div className="postTaglist">
            <p>タグ</p>
            <ul>
              {blogPost.tags.map((tag, i) => (
                <li className="postTag" key={i}>
                  <a href={`${PATH}tag/${tag.id}`}>{tag.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : blogPost.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default Post;
