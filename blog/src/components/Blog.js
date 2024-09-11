import React from "react";

const data = [
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg",
    title: "For Families of Teens at Microsoft Surface",
    tag: "Editors Pick",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg",
    title: "Why Netflix Shares Are Down 10%",
    tag: "Editors Pick",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg",
    title: "6 Bots That Deliver Science and Serendipity on Twitter",
    tag: "Apps",
  },
];

function Blog() {
  return (
    <>
      <section className="Blog">
        <div className="container mx-auto mt-10">
          <div className="grid sm:grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="flex items-center justify-between pb-5">
                <h4 className=" text-xl font-semibold">Editor’s Pick</h4>
                <span className="text-[#805aed] font-semibold">
                  ViewAll <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div className="grid sm:grid-cols-12 gap-5">
                {data.map((item, index) => (
                  <div key={index} className="col-span-4">
                    <div className="card">
                      <img className="" src={item.imageUrl} alt={item.title} />
                      <h4 className=" w-100 pt-2 font-semibold px-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
            </div>
            <div className="lg:col-span-4 col-span-12 sm:auto">
              <div className="flex items-center justify-center">
                <div className=" p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 p-2 rounded-full">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-gray-600 mb-4">
                    gravida aliquet vulputate faucibus tristique odio.
                  </p>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                  <button className="flex items-center justify-center bg-purple-500 text-white p-2 rounded-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
