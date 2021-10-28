import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
  },
  fonts: {
    headings: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.700",
      },
    },
  },
});
