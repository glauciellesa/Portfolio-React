import ToggleTheme from "./toggle/ToggleTheme";
import styled from "styled-components";

export default () => {
  return (
    <StyledMenu>
      <nav>
        Início
        <ToggleTheme />
      </nav>
    </StyledMenu>
  );
};

const StyledMenu = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: ${({ theme }) => theme.shadowNav};

  @media (max-width: 768px) {
    nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      justify-content: space-around;
    }
  }
`;
