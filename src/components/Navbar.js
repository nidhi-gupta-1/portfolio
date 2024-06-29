import { ChatAltIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar({theme, setTheme}) {

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem('theme',JSON.stringify(newTheme))
    setTheme(newTheme);
  }

  return (
    <header className="dark:bg-gray-800 bg-gray-100 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="title-font font-medium mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nidhi Gupta
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="px-2 dark:hover:bg-gray-700 hover:bg-gray-200 rounded">
            Past Work
          </a>
          <a href="#skills" className="px-2 dark:hover:bg-gray-700 hover:bg-gray-200 rounded">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Connect
            <ChatAltIcon className="w-8 h-8 ml-1 text-green-300" />
        </a>
        <div
          className="inline-flex items-center dark:bg-gray-800 border-0 py-1 px-3 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200 rounded mt-4 md:mt-0"
          onClick={handleTheme}
          >
            {theme === 'dark' ? <MoonIcon className="w-8 h-8 ml-1 text-white"/> : <SunIcon className="w-8 h-8 ml-1 text-yellow-300" />}
        </div>
      </div>
    </header>
  );
}