import React from "react";

function TechBanner() {
  return (
    <>
      <div
        className="tech-banner bg-fixed bg-cover bg-center bg-no-repeat w-full h-96 relative"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg')`,
        }}
      >
        <div className="container mx-auto">
          <div className="tech-content relative flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl font-semibold">Shaping the Future of Technology</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechBanner;
