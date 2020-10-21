import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {PATH} from "../config";
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
        <div>よみこみちゅうです</div>
      ) : blogTag.success ? (
        <div>
          <h2>{blogTag.name}</h2>
          <div>{blogTag.desc}</div>
          <div>
            {blogPostList.fetching ? (
              <div>よみこみちゅう</div>
            ) : blogPostList.success ? (
              <div>
                <h3>記事一覧</h3>
                <ul>
                  {blogPostList.contents.map((blogPost, i) => (
                    <li key={i}>
                      <a href={`${PATH}post/${postIdToPath(blogPost.id)}`}>
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
              <div>ないです</div>
            ) : (
              <div>待機中です</div>
            )}
          </div>
        </div>
      ) : blogTag.failed ? (
        <div>ないです</div>
      ) : (
        <div>待機中です。</div>
      )}
    </div>
  );
}

export default Tag;
