import React from "react";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div>
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
