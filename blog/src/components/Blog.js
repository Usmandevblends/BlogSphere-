import React from "react";

const data = [
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg",
    title: "For Families of Teens at Microsoft Surface",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg",
    title: "Why Netflix Shares Are Down 10%",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg",
    title: "6 Bots That Deliver Science and Serendipity on Twitter",
  },
];

function Blog() {
  return (
    <>
      <section className="Blog">
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-12 gap-5">
                {data.map((item, index) => (
                  <div key={index} className="col-span-4">
                    <div className="card">
                      <img src={item.imageUrl} alt={item.title} />
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 sm:auto mx-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
