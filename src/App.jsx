import "./App.css";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
import Extras from "./components/Extras";
// import FAQ from "./components/FAQ";

function App() {
  const [mode, setMode] = React.useState("dark");
  const defaultTheme = createTheme({ palette: { mode } });
  const lg = useMediaQuery("(min-width: 1280px)");
  const md = useMediaQuery("(min-width: 960px)");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div
        className={`h-screen overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] ${
          md || lg ? "snap-y snap-mandatory snap-always" : ""
        }`}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="experience" className="snap-start">
          <Experience />
        </section>
        <section id="education" className="snap-start">
          <Education />
        </section>
        <section id="certifications" className="snap-start">
          <Certifications />
        </section>
        <section id="testimonials" className="snap-start">
          <Testimonials />
        </section>
        <section id="extras" className="snap-start">
          <Extras />
        </section>
        <SocialIcons mode={mode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
