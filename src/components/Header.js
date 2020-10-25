import React from "react";

import {PATH, TITLE, DESCRIPTION} from "../config";

function Header() {
  return (
    <header>
      <h1>
        <a href={`${PATH}post`}>{TITLE}</a>
      </h1>
      <p>{DESCRIPTION}</p>
    </header>
  );
}

export default Header;
