import "./App.css";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import UnderDevelopment from "./components/UnderDevelopment";
// import LogoCollection from "./components/LogoCollection";
// import Highlights from "./components/Highlights";
// import Pricing from "./components/Pricing";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = React.useState("dark");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div className="h-screen snap-y scroll-smooth snap-mandatory snap-always overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
      
        {/* <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box> */}
        <section id="hero" className="snap-start">
          <UnderDevelopment />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
