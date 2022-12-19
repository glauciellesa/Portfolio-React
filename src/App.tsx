import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CSSReset from "./theme/components/CSSReset";
import MyThemeProvider from "./theme/contexts/ThemeContext";

function App() {
  return (
    <>
      <MyThemeProvider>
        <CSSReset />
        <Header />
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
