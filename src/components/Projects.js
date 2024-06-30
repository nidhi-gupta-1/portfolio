import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {

  return (
    <section id="projects" className="dark:bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-4/3 mx-auto leading-relaxed text-base">
            I develop responsive and user-friendly web applications that provides reusability and scalability. These applications is built using list the technologies, frameworks, and programming languages used e.g., HTML, Css, JavaScript, React, React hooks, Node.js, TailwindCss, npm etc.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-full">
                <img
                  width="800"
                  height="600"
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 dark:border-gray-800 border-gray-200 dark:bg-gray-900 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium dark:text-green-400 text-green-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed h-auto">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}