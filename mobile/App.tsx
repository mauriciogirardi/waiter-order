import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  const [fontsLoaded] = useFonts({
    GeneralSans400: require("./src/assets/fonts/GeneralSans-Regular.otf"),
    GeneralSans500: require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    GeneralSans700: require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
