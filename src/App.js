import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './containers/Home/Home';
import Game from './containers/Game/Game';
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#146181",
      accent: "#9733b0d9",
      light: "#ddb7e7d9"
    },
    secondary: {
      purple: "#9c27b0",
      warning: "#f44336",
      success: "#4caf50",
      main: "#A51D4F"
    },
    accent: {
      main: "#A5CE3A"
    },
    customText: {
      main: "#414141",
      dark: "#515151",
      light: "#FFF"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Router spacing={2}>
        <Switch>
          <Route path="/" exact render={Home}/>
          <Route path="/game" exact render={Game}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
