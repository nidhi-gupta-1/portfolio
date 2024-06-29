import React, { Suspense } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));

export default function App() {
  const [theme, setTheme] = React.useState(JSON.parse(sessionStorage.getItem('theme')))

  React.useEffect(() => {
    if(theme !== null){
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
    } else {
      setTheme('dark')
      sessionStorage.setItem('theme',JSON.stringify('dark'))
    } 
}, [theme, setTheme]);

  return (
    <main className="dark:text-gray-400 dark:bg-gray-900 body-font">
      <Navbar {...{theme, setTheme}}/>
      <About />
      <Suspense fallback={<p>{"...Loading"}</p>}>
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  );
}
