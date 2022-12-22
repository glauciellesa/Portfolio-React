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
      <div id="primary-navigation" data-visible="false" className="nav">
        <button className="mobileToggle" onClick={handleToggle}>
          {navbarOpen ? (
            <div key={"bar"}>
              <span className="fa-solid fa-bars" />
            </div>
          ) : (
            <div key={"close"}>
              <span className="fa-solid fa-close" />
            </div>
          )}
          <span className="sr-only">Menu</span>
        </button>
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

const StyledHeader = styled.div`
  font-family: ${({ theme }) => theme.fontFamilly};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadowNav};
  background-color: ${({ theme }) => theme.navColor};
  padding: 20px;
  width: 100vw;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }
  .nav :hover {
    color: ${({ theme }) => theme.firstColor};
  }

  .mobileToggle {
    display: none;
  }

  @media (max-width: 700px) {
    .nav {
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
      position: absolute;
      top: 20px;
      right: 20px;
      width: 3rem;
      aspect-ratio: 1; //change width and height in the same time
      border: 0;
      color: ${({ theme }) => theme.titleColor};
      background-color: transparent;
      svg {
        font-size: 2rem;
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
