import React from "react";

function Gagetbanner() {
  return (
    <>
      <div className="gadgets-banner w-full  bg-cover bg-no-repeat bg-center relative">
        <div className="container mx-auto">
          <div className="tech-content relative flex items-center justify-center flex-col gap-3 h-96">
            <h1 className="text-3xl font-semibold text-white uppercase  first-letter:text-4xl">Gadgets</h1>
            <p className="text-white text-center" style={{width:'50%'}}>
              Explore the latest gadgets and technology news, reviews, and
              trends. Stay up-to-date with the latest releases, innovations, and
              advancements in the world of gadgets and technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gagetbanner;
