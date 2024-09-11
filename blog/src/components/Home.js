import React from "react";


function Home() {
  return (
    <>
      <div className="banner">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <div className="post-wrapper w-100 bg-cover bg-center bg-no-repeat">
                <div className="content flex flex-col absolute top-80 leading-10 px-5 z-50">
                  <span className="text-gray-300">Software</span>
                  <h4 className="text-white text-3xl font-bold">
                    <a href="">
                      Running macOS and Windows 10 on the Same Computer
                    </a>
                  </h4>
                  <p className="text-white leading-6 pt-2">
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet ...
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 sm:auto mx-5">
              <div className="apps-store">
                <div className="apple-content">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
