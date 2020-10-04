import React from "react";

import {PATH} from "../config";

function Top() {
  return (
    <div>
      <h2>とっぷ</h2>
      <div>
        <a href={`${PATH}post`}>記事一覧</a>
      </div>
      <div>
        <a href={`${PATH}category`}>カテゴリ一覧</a>
      </div>
      <div>
        <a href={`${PATH}tag`}>タグ一覧</a>
      </div>
    </div>
  );
}

export default Top;
