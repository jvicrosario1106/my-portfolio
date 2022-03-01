import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{"I'm JV Rosario"}</title>
        <meta name="author" content="JV Rosario" />
        <meta
          name="keywords"
          content="Software Development, Programming, Analytics, Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon.svg" />
      </Head>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;
