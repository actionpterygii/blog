import React from "react";

import {PATH, TITLE, DESCRIPTION} from "../config";

function Header() {
  return (
    <header>
      <div className="inner">
        <h1>
          <a href={`${PATH}post`}>{TITLE}</a>
        </h1>
        <p>{DESCRIPTION}</p>
      </div>
    </header>
  );
}

export default Header;
