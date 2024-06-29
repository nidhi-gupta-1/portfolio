import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";

export default function About() {

  // Function will execute on click of button
  const handleDownload = () => {
    fetch('/Resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pb-32 pt-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
            Hi, I'm Nidhi Gupta.
            <br className="hidden lg:inline-block" />
            <span className="sm:text-3xl text-2xl">I love to build amazing
              apps.</span>
          </h1>
          <p className="mb-8 leading-relaxed w-10/12">
            Highly skilled web developer with expertise in building scalable, responsive, and user-friendly websites, leveraging cutting-edge technologies to deliver innovative solutions that drive business growth and customer engagement.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-black font-semibold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={handleDownload}>
              My Profile <DownloadIcon className="w-6 h-7 ml-1" />
            </button>
            <a
              href="#projects"
              className="ml-4 inline-flex dark:text-gray-400 dark:bg-gray-800 bg-gray-400 border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-lg">
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
            height="400"
            src={'/webdeveloper.webp'}
          />
        </div>
      </div>
    </section>
  );
}