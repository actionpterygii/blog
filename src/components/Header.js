import React, {useState, useEffect} from "react";
import useAPI from "../scripts/useAPI";

function Header() {
  const {blogInfo, fetchBlogInfo} = useAPI();

  useEffect(() => {
    fetchBlogInfo();
  }, []);

  return (
    <div>
      <h1>{blogInfo.title}</h1>
      <p>{blogInfo.description}</p>
    </div>
  );
}

export default Header;
