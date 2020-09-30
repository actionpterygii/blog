import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

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
  }, []);

  return (
    <div>
      {blogCategory.fetching ? (
        <div>よみこみちゅうです</div>
      ) : blogCategory.success ? (
        <div>
          <h2>{blogCategory.name}</h2>
          <div>{blogCategory.desc}</div>
          <div>
            {blogPostList.fetching ? (
              <div>よみこみちゅう</div>
            ) : blogPostList.success ? (
              <div>
                <h3>記事一覧</h3>
                <ul>
                  {blogPostList.contents.map((blogPost, i) => (
                    <li key={i}>
                      <a href={`/#/post/${postIdToPath(blogPost.id)}`}>
                        <h4>{blogPost.title}</h4>
                        <div>{blogPost.content}</div>
                        <div>{blogPost.category.name}</div>
                        <ul>
                          {blogPost.tags.map((tag, i) => (
                            <li key={i}>{tag.name}</li>
                          ))}
                        </ul>
                      </a>
                    </li>
                  ))}
                </ul>
                <div>
                  {blogPostList.moreFetching ? (
                    <div>読み込み中</div>
                  ) : blogPostList.totalCount > blogPostList.contents.length ? (
                    <button
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
              <div>ないです</div>
            ) : (
              <div>なにか普通じゃない状態です</div>
            )}
          </div>
        </div>
      ) : blogCategory.failed ? (
        <div>ないです</div>
      ) : (
        <div>なにか普通じゃない状態です。</div>
      )}
    </div>
  );
}

export default Category;
