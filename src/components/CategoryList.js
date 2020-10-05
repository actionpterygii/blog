import React, {useEffect} from "react";

import {PATH} from "../config";
import useAPI from "../scripts/useAPI";

function CategoryList() {
  const {blogCategoryList, fetchBlogCategoryList} = useAPI();

  useEffect(() => {
    fetchBlogCategoryList();
  }, []);

  return (
    <div>
      {blogCategoryList.fetching ? (
        <div>よみこみちゅう</div>
      ) : blogCategoryList.success ? (
        <div>
          <h2>カテゴリ一覧</h2>
          <ul>
            {blogCategoryList.contents.map((category, i) => (
              <li key={i}>
                <a href={`${PATH}category/${category.id}`}>
                  <h3>{category.name}</h3>
                  <div>{category.desc}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : blogCategoryList.failed ? (
        <div>ないです</div>
      ) : (
        <div>なにか普通じゃない状態です</div>
      )}
    </div>
  );
}

export default CategoryList;
