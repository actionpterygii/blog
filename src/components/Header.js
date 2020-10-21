import React from "react";

import {TITLE, DESCRIPTION} from "../config";

function Header() {
  return (
    <header>
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
    </header>
  );
}

export default Header;
