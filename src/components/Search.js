import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import useCommonState from "../scripts/useCommonState";
import useAPI from "../scripts/useAPI";

function PostList() {
  const {searchText, changeSearchText} = useCommonState();
  const {blogPostList, fetchBlogPostList, postIdToPath} = useAPI();

  useEffect(() => {
    fetchBlogPostList("new", "post", searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div>
      <div>
        <input
          className="searchInput"
          type="text"
          value={searchText}
          onChange={(e) => changeSearchText(e.currentTarget.value)}
        />
      </div>
      <div>
        {searchText ? (
          <div>
            {blogPostList.fetching ? (
              <div className="loading">よみこみちゅう</div>
            ) : blogPostList.success ? (
              <div>
                <ul className="postList">
                  {blogPostList.contents.map((blogPost, i) => (
                    <li key={i}>
                      <Link to={`/post/${postIdToPath(blogPost.id)}`}>
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
                      type="button"
                      onClick={() =>
                        fetchBlogPostList("continue", "post", searchText)
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
        ) : (
          <div className="noinput">検索文字を入力してください</div>
        )}
      </div>
    </div>
  );
}

export default PostList;
