import logo from "./logo.svg";
import "./App.css";
import { ThemeContextProvider } from "./components/ThemeProvider";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <ThemeContextProvider>
      <AppBar />
      <Home />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
