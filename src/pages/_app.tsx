import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = false;
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Olá, seja bem vindo ao meu portfolio. Que tal conhecer um pouco mais sobre meus trabalhos?" />
        <title>Wellyngton Kuhn | Portfolio</title>
      </Head>
      <StyledComponentsRegistry>
          <Component {...pageProps} />
      </StyledComponentsRegistry>
    </>
  );
}
