import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import useAPI from "./scripts/useAPI";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const {fetchBlogInfo} = useAPI();

  useEffect(() => {
    fetchBlogInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
