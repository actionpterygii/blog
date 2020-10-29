import React from "react";
import {Link} from "react-router-dom";

import {TITLE, DESCRIPTION} from "../config";

function Header() {
  return (
    <header>
      <div className="inner">
        <h1>
          <Link to={`/`}>{TITLE}</Link>
        </h1>
        <p>{DESCRIPTION}</p>
      </div>
    </header>
  );
}

export default Header;
