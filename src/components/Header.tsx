import { useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavItem from "./NavItem";
import ToggleTheme from "./toggle/ToggleTheme";
export default () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    console.log(navbarOpen);
    setNavbarOpen((navbarOpen) => !navbarOpen);
  };

  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>
      <div className="navBar">
        <button className="mobileToggle" onClick={handleToggle}>
          {navbarOpen ? (
            <div key={"bar"}>
              <span className="fa-solid fa-close" />
            </div>
          ) : (
            <div key={"close"}>
              <span className="fa-solid fa-bars" />
            </div>
          )}
          <span className="sr-only">Menu</span>
        </button>
        <div className={`nav ${navbarOpen ? "showMenu" : ""}`}>
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
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100vw;
  height: 30px;
  font-family: ${({ theme }) => theme.fontFamilly};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadowNav};
  background-color: ${({ theme }) => theme.navColor};
  padding: 0 10px;

  .navBar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0 16px;
  }
  .nav :hover {
    color: ${({ theme }) => theme.firstColor};
  }

  .mobileToggle {
    display: none;
  }

  @media (max-width: 35em) {
    .nav {
      display: none;
    }
    .showMenu {
      display: flex;
      gap: 2rem;
      position: fixed;
      inset: 0 0 0 30%;
      flex-direction: column;
      padding: min(30vh, 10rem) 2em;
      background: hsla(0, 0%, 80%, 0.5);
    }
    .mobileToggle {
      display: block;
      z-index: 9999;
      position: fixed;
      top: 0px;
      right: 10px;
      width: 2rem;
      aspect-ratio: 1; //change width and height in the same time
      border: 0;
      color: ${({ theme }) => theme.titleColor};
      background-color: transparent;
      svg {
        font-size: 1.5rem;
      }
    }

    @supports (backdrop-filter: blur(0.5rem)) {
      .nav {
        background: ${({ theme }) => theme.transparency};
        backdrop-filter: blur(0.5rem);
      }
    }
  }
`;
