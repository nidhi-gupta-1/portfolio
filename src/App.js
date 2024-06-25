import React, { Suspense } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Suspense fallback={<p>{"...Loading"}</p>}>
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  );
}
