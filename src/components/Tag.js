import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function Tag() {
  const {
    blogTag,
    fetchBlogTag,
    blogPostList,
    fetchBlogPostList,
    postIdToPath
  } = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogTag(key);
    fetchBlogPostList("new", "tags", key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogTag.fetching ? (
        <div className="loading">よみこみちゅう</div>
      ) : blogTag.success ? (
        <div>
          <h2>「{blogTag.name}」タグ</h2>
          <div className="desc">{blogTag.desc}</div>
          <div>
            {blogPostList.fetching ? (
              <div className="loading">よみこみちゅう</div>
            ) : blogPostList.success ? (
              <div>
                <h3>の記事一覧</h3>
                <ul className="postList">
                  {blogPostList.contents.map((blogPost, i) => (
                    <li key={i}>
                      <Link to={`post/${postIdToPath(blogPost.id)}`}>
                        <h4 className="postTitle">{blogPost.title}</h4>
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
                      type="button"
                      onClick={() => fetchBlogPostList("continue", "tags", key)}
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
        </div>
      ) : blogTag.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default Tag;
