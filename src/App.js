import logo from "./logo.svg";
import "./App.css";
import { ThemeContextProvider } from "./components/ThemeProvider";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <ThemeContextProvider>
      <AppBar />
      <ToggleTheme />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
