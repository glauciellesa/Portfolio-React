import styled from "styled-components";
export default () => {
  return <StyledLogo>Glaucielle</StyledLogo>;
};

const StyledLogo = styled.div`
  display: flex;
  font-size: 14px;
  color: ${({ theme }) => theme.titleColor};
  :hover {
    color: ${({ theme }) => theme.firstColor};
  }
`;
