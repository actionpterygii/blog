import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

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
            <Link to={`/category/${blogPost.category.id}`}>
              {blogPost.category.name}
            </Link>
          </div>
          <div className="postTaglist">
            <p>タグ</p>
            <ul>
              {blogPost.tags.map((tag, i) => (
                <li className="postTag" key={i}>
                  <Link to={`/tag/${tag.id}`}>{tag.name}</Link>
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
