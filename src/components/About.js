import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nidhi Gupta.
            <br className="hidden lg:inline-block" />
            <span className="sm:text-3xl text-2xl">I love to build amazing
              apps.</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Highly skilled web developer with expertise in building scalable, responsive, and user-friendly websites, leveraging cutting-edge technologies to deliver innovative solutions that drive business growth and customer engagement.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black font-semibold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded lg:max-w-sm sm:w-full md:w-5/6 w-5/6"
            alt="hero"
            fetchpriority="high"
            width="640" 
            height= "auto"
            src={`${process.env.PUBLIC_URL}/webdeveloper.webp`}
          />
        </div>
      </div>
    </section>
  );
}