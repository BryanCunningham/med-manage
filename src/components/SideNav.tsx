import styled from "@emotion/styled";
import Link from "next/link";

const StyledSideNav = styled.aside`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <nav>
        <ul>
          <li>
            <Link href="">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </StyledSideNav>
  );
};

export default SideNav;
