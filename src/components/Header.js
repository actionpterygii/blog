import React from "react";

import useAPI from "../scripts/useAPI";

function Header() {
  const {blogInfo} = useAPI();

  return (
    <header>
      <h1>{blogInfo.title}</h1>
      <p>{blogInfo.description}</p>
    </header>
  );
}

export default Header;
