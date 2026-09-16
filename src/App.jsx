import { useContext } from "react";
import { Context } from "./context/Context";
import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Footer from "./components/sections/Footer/Footer";

function App() {
  const { theme } = useContext(Context);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
