import { extendTheme } from "@chakra-ui/react";
import { Button } from "@/components/Button";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
    primary: {
      100: "#4693FF",
      200: "#7480E7",
      300: "#8B6DCC",
      400: "#985BAF",
    },
  },
  components: {
    Button
  },
});

export default theme;
