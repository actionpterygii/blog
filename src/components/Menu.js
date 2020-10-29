import React from "react";
import {Link} from "react-router-dom";

import {PATH} from "../config";

function Menu() {
  return (
    <div>
      {/* <div>
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
      </div> */}
      <div>
        <Link to="/">記事一覧</Link>
      </div>
      <div>
        <Link to="/search">記事検索</Link>
      </div>
      <div>
        <Link to="/category">カテゴリ一覧</Link>
      </div>
      <div>
        <Link to="/tag">タグ一覧</Link>
      </div>
    </div>
  );
}

export default Menu;
