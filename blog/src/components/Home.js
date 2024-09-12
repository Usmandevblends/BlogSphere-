import React from "react";
import Blog from "./Blog";
import Banner from "./Banner";
import TechReview from "./TechReview";

function Home({ articles }) {
  return (
    <>
      <Banner articles={articles} />
      <Blog />
      <TechReview />
    </>
  );
}

export default Home;
