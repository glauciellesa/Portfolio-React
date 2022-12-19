import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CSSReset from "./theme/components/CSSReset";
import MyThemeProvider from "./theme/contexts/ThemeContext";

function App() {
  return (
    <>
      <MyThemeProvider>
        <CSSReset />
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
      </MyThemeProvider>
    </>
  );
}

export default App;
