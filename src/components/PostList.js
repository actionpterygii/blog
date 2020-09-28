import React, {useEffect} from "react";

import useAPI from "../scripts/useAPI";

function PostList() {
  const {blogPostList, fetchBlogPostList, postIdToPath} = useAPI();

  useEffect(() => {
    fetchBlogPostList("new");
  }, []);

  console.log(blogPostList);

  if (blogPostList.fetching) {
    return <div>よみこみちゅう</div>;
  } else {
    if (blogPostList.success) {
      return (
        <div>
          <h2>記事一覧</h2>
          <ul>
            {blogPostList.contents.map((blogPost, i) => (
              <li key={i}>
                <a href={`/#/post/${postIdToPath(blogPost.id)}`}>
                  <h3>{blogPost.title}</h3>
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
      );
    } else if (blogPostList.failed) {
      return <div>ないです</div>;
    } else {
      return <div>なにか普通じゃない状態です</div>;
    }
  }
}

export default PostList;
