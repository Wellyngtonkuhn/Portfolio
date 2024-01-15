import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "@/styles/Theme/light";
import { DarkTheme } from "@/styles/Theme/dark";
import { DefaultStyle } from "@/styles/DefaultStyle";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/works";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Main() {
  const [darkMode, setDarkMode] = useState<Boolean>(true);

  const handleDarkMode = () => {
    return setDarkMode((prev): Boolean => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <Head>
        <title>Wellyngton Kuhn | Portfolio</title>
        <meta
          name="description"
          content="Olá, seja bem vindo ao meu portfolio. Que tal conhecer um pouco mais sobre meus trabalhos?"
        />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
      <DefaultStyle />
    </ThemeProvider>
  );
}
