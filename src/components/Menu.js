import React from "react";

import {PATH} from "../config";

function Menu() {
  return (
    <div>
      <div>
        <a href={`${PATH}post`}>記事一覧</a>
      </div>
      <div>
        <a href={`${PATH}search`}>記事検索</a>
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

export default Menu;
