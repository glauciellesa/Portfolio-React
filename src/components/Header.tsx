import styled from "styled-components";
import Logo from "./Logo";
import ToggleTheme from "./toggle/ToggleTheme";
export default () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>
      <div className="navBar">
        <div className="home">
          <a href="/home">Home</a>
        </div>
        <div className="about">
          <a href="/about">About</a>
        </div>
        <div className="skills">
          <a href="/skills">Skills</a>
        </div>
        <div className="portfolio">
          <a href="/portfolio">Portifolio</a>
        </div>
        <div className="contact">
          <a href="/contact">Contact me</a>
        </div>
        <ToggleTheme />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  font-family: ${({ theme }) => theme.fontFamilly};
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadowNav};
  background-color: ${({ theme }) => theme.dark};
  padding: 20px;
  width: 100vw;
  .navBar {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.light};
    }
  }
`;
