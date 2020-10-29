import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function Category() {
  const {
    blogCategory,
    fetchBlogCategory,
    blogPostList,
    fetchBlogPostList,
    postIdToPath
  } = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogCategory(key);
    fetchBlogPostList("new", "category", key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogCategory.fetching ? (
        <div className="loading">よみこみちゅう</div>
      ) : blogCategory.success ? (
        <div>
          <h2>「{blogCategory.name}」カテゴリー</h2>
          <div className="desc">{blogCategory.desc}</div>
          <div>
            {blogPostList.fetching ? (
              <div className="loading">よみこみちゅう</div>
            ) : blogPostList.success ? (
              <div>
                <h3>の記事一覧</h3>
                <ul className="postList">
                  {blogPostList.contents.map((blogPost, i) => (
                    <li key={i}>
                      <Link to={`/post/${postIdToPath(blogPost.id)}`}>
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
                      onClick={() =>
                        fetchBlogPostList("continue", "category", key)
                      }
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
      ) : blogCategory.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default Category;
