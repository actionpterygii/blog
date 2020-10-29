import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function TagList() {
  const {blogTagList, fetchBlogTagList} = useAPI();

  useEffect(() => {
    fetchBlogTagList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogTagList.fetching ? (
        <div className="loading">よみこみちゅう</div>
      ) : blogTagList.success ? (
        <div>
          <h2>タグ一覧</h2>
          <ul className="tagList">
            {blogTagList.contents.map((category, i) => (
              <li key={i}>
                <Link to={`/tag/${category.id}`}>
                  <h3 className="tagName">{category.name}</h3>
                  <div className="tagDesc">{category.desc}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : blogTagList.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default TagList;
