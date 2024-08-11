import { BrowserRouter } from "react-router-dom";
import CustomRouts from "./routs";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import customTheme from "./theme/theme";
import { CssVarsProvider } from "@mui/joy";
function App() {
  return (
    <CssVarsProvider theme={customTheme}>
      <BrowserRouter>
        <CustomRouts />
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
