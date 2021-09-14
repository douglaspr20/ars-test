import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { themeProps } from "./utils/ThemeProps";

//Global State
import ProceduresState from "./context/Procedures/ProceduresState";

//Home
import Home from "./pages/home";

const theme = themeProps;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProceduresState>
          <Home />
        </ProceduresState>
      </ThemeProvider>
    </div>
  );
}

export default App;
