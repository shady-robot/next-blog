import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
export default App;
