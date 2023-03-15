import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { customTheme, theme } from "./themes";
import { Reset } from "./global/reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderSC theme={customTheme}>
      <ThemeProviderEmotion theme={customTheme}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </ThemeProviderEmotion>
    </ThemeProviderSC>
    <Reset></Reset>
  </React.StrictMode>
);
