import React from "react";
import Blog from "./Blog";
import Banner from "./Banner";
import TechReview from "./TechReview";
import Footer from "./Footer";

function Home({ articles }) {
  return (
    <>
      <Banner articles={articles} />
      <Blog />
      <TechReview />
      <Footer />
    </>
  );
}

export default Home;
