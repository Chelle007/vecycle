import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
