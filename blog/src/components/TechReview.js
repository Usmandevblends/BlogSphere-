import React from "react";

const Tech = [
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg",
    term: "Gadget",
    title: "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
    subtitle:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg",
    term: "Gadget",
    title: "Dell XPS 13 2021: The best Windows laptop now with OLED",
    subtitle:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },
  {
    imageUrl:
      "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-22.jpg",
    term: "Reviews",
    title: "Watching Their Dust: Photographing Players in Pollination",
    subtitle:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },
];

function TechReview() {
  return (
    <section className="TechReview">
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-12 gap-5">
          {Tech.map((item, index) => (
            <div className="col-span-12 lg:col-span-4" key={index}>
              <div className="flex flex-col gap-5">
                <div className="img">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="blog-content flex flex-col">
                  <span className="text-[#805aed] uppercase font-medium">
                    {item.term}
                  </span>
                  <h2 className=" text-xl font-semibold pt-2">{item.title}</h2>
                  <p className=" mt-5 text-gray-500">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechReview;
