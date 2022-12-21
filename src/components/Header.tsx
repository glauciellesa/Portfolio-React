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
      <button
        className="mobileToggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <i className="fa-solid fa-bars"></i>
        <span className="sr-only">Menu</span>
      </button>
      <div id="primary-navigation" data-visible="false" className="nav">
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
  padding: 10px;
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
    z-index: 9999;
    position: absolute;
    width: 2rem;
    aspect-ratio: 1; //change width and height in the same time
    top: 2rem;
    right: 2rem;
    border: 0;
  }

  @media (max-width: 700px) {
    .nav {
      gap: 2rem;
      position: fixed;
      inset: 0 0 0 30%;
      flex-direction: column;
      padding: min(30vh, 10rem) 2em;
      background: hsla(0, 0%, 80%, 0.5);
    }
    @supports (backdrop-filter: blur(0.1rem)) {
      .nav {
        background: ${({ theme }) => theme.transparency};
        backdrop-filter: blur(0.1rem);
      }
    }
  }
`;
