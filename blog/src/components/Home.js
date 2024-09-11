import React from "react";
import Blog from "./Blog";
import Banner from "./Banner";

function Home({ articles }) {
  return (
    <>
      <Banner articles={articles} />
      <Blog />
    </>
  );
}

export default Home;
