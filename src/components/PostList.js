import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function PostList() {
  const {blogPostList, fetchBlogPostList, postIdToPath} = useAPI();

  useEffect(() => {
    fetchBlogPostList("new");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogPostList.fetching ? (
        <div className="loading">よみこみちゅう</div>
      ) : blogPostList.success ? (
        <div>
          <h2>記事一覧</h2>
          <ul className="postList">
            {blogPostList.contents.map((blogPost, i) => (
              <li key={i}>
                <Link to={`post/${postIdToPath(blogPost.id)}`}>
                  <h3 className="postTitle">{blogPost.title}</h3>
                  <div className="postContent">{blogPost.content}</div>
                  <div className="postCategory">
                    カテゴリー：{blogPost.category.name}
                  </div>
                  <ul>
                    {blogPost.tags.map((tag, i) => (
                      <li className="postTag" key={i}>
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            {blogPostList.moreFetching ? (
              <div className="loading">よみこみちゅう</div>
            ) : blogPostList.totalCount > blogPostList.contents.length ? (
              <button
                className="more"
                type="button"
                onClick={() => fetchBlogPostList("continue")}
              >
                更に読み込む
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : blogPostList.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default PostList;
