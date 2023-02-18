import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Isaac</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            An Upcoming Full-Stack Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm learning about Web Development technology to build full-stack
            websites and web applications. Currently, I'm learning about the
            front-end visual aspect of a website before I transition into the
            back-end behind the scenes aspect of a website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
