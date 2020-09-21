import React from "react";
import useAPI from "../scripts/useAPI";

function Footer() {
  const {blogInfo} = useAPI();

  return (
    <footer>
      <small>&copy; 2020 {blogInfo.copyright}</small>
    </footer>
  );
}

export default Footer;
