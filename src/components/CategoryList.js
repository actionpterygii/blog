import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function CategoryList() {
  const {blogCategoryList, fetchBlogCategoryList} = useAPI();

  useEffect(() => {
    fetchBlogCategoryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {blogCategoryList.fetching ? (
        <div className="loading">よみこみちゅう</div>
      ) : blogCategoryList.success ? (
        <div>
          <h2>カテゴリー一覧</h2>
          <ul className="categoryList">
            {blogCategoryList.contents.map((category, i) => (
              <li key={i}>
                <Link to={`category/${category.id}`}>
                  <h3 className="categoryName">{category.name}</h3>
                  <div className="categoryDesc">{category.desc}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : blogCategoryList.failed ? (
        <div className="nothing">ないです</div>
      ) : (
        <div className="waiting">待機中です</div>
      )}
    </div>
  );
}

export default CategoryList;
