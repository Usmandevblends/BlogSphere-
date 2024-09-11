import React from "react";

function Banner({articles}) {
  return (
    <>
      <div className="banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <div className="post-wrapper w-100 bg-cover bg-center bg-no-repeat relative">
                <div className="content flex flex-col  leading-10 px-5  relative">
                  <span className="text-gray-300">Software</span>
                  <h4 className="text-white text-3xl font-bold">
                    Running macOS and Windows 10 on the Same Computer
                  </h4>
                  <p className="text-white leading-6 pt-1">
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet ...
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 sm:auto mx-5">
              <div className="apps-store">
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-09.jpg"
                  alt=""
                />
              </div>
              {articles.map((article, index) => (
                <div key={index} className="article-item">
                  <h5 className=" font-normal pt-2 text-[#805aed] text-xl">
                    {article.category}
                  </h5>
                  <p className=" font-bold">{article.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
