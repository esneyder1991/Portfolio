import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-colors-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="App font-['Sen'] bg-purple-700 dark:bg-purple-950 min-h-screen md:mx-auto mr-0 max-w-[1500px]">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <SocialLinks />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
