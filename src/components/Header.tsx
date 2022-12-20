import styled from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ToggleTheme from "./toggle/ToggleTheme";
export default () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>
      <div className="nav">
        <NavItem className="home" href="/home">
          Home
        </NavItem>
        <NavItem className="user" href="/about">
          About
        </NavItem>
        <NavItem className="file" href="/skills">
          Skills
        </NavItem>
        <NavItem className="image" href="/portfolio">
          Portfolio
        </NavItem>
        <NavItem className="paper-plane" href="/contact">
          Contact me
        </NavItem>
        <ToggleTheme />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  font-family: ${({ theme }) => theme.fontFamilly};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadowNav};
  background-color: ${({ theme }) => theme.dark};
  padding: 10px;
  width: 100vw;

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }
`;
