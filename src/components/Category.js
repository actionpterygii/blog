import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import useAPI from "../scripts/useAPI";

function Category() {
  const {blogCategory, fetchBlogCategory} = useAPI();
  const {key} = useParams();

  useEffect(() => {
    fetchBlogCategory(key);
  }, []);

  if (blogCategory.fetching) {
    return <div>よみこみちゅうです</div>;
  } else {
    if (blogCategory.success) {
      return (
        <div>
          <h2>{blogCategory.name}</h2>
          <div>{blogCategory.desc}</div>
        </div>
      );
    } else if (blogCategory.failed) {
      return <div>ないです</div>;
    } else {
      return <div>なにか普通じゃない状態です。</div>;
    }
  }
}

export default Category;
