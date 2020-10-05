import React, {useEffect} from "react";

import {PATH} from "../config";
import useAPI from "../scripts/useAPI";

function TagList() {
  const {blogTagList, fetchBlogTagList} = useAPI();

  useEffect(() => {
    fetchBlogTagList();
  }, []);

  return (
    <div>
      {blogTagList.fetching ? (
        <div>よみこみちゅう</div>
      ) : blogTagList.success ? (
        <div>
          <h2>タグ覧</h2>
          <ul>
            {blogTagList.contents.map((category, i) => (
              <li key={i}>
                <a href={`${PATH}tag/${category.id}`}>
                  <h3>{category.name}</h3>
                  <div>{category.desc}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : blogTagList.failed ? (
        <div>ないです</div>
      ) : (
        <div>なにか普通じゃない状態です</div>
      )}
    </div>
  );
}

export default TagList;
