import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CSSReset from "./theme/components/CSSReset";
import MyThemeProvider from "./theme/contexts/ThemeContext";
import styled from "styled-components";

function App() {
  return (
    <MyThemeProvider>
      <StyledBody>
        <CSSReset />
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
      </StyledBody>
    </MyThemeProvider>
  );
}

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  height: 100vh;
`;

export default App;
