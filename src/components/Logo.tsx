import styled from "styled-components";
export default () => {
  return <StyledLogo>Glaucielle</StyledLogo>;
};

const StyledLogo = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.light};
`;
