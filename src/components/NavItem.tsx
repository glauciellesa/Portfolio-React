import styled from "styled-components";

interface Props {
  className: string;
  href: string;
  children: string;
}
export default (props: Props) => {
  return (
    <StyledNavbar>
      <a href={props.href}>
        <i className={`fa fa-${props.className}`} />
        {props.children}
      </a>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.light};
    display: flex;
    gap: 5px;
  }
  i {
    display: none;
  }
`;
