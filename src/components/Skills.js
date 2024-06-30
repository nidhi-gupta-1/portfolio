import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  const ref1 = React.useRef();
  const isVisible1 = RevealOnScroll(ref1);
  const ref2 = React.useRef();
  const isVisible2 = RevealOnScroll(ref2);

  return (
    <section id="skills">
      <div className="container px-5 py-16 mx-auto">
        <div ref={ref1} className={`text-center mb-5 transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-4/5 lg:w-4/3 mx-auto">
            As a web developer, I possess a diverse skill set that includes proficiency in both
            Frontend and Backend development.
          </p>
        </div>
        <div ref={ref2} className={`flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="dark:bg-gray-800 bg-gray-200 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium dark:text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}