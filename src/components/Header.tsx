
import styled from '@emotion/styled';

import Logo from './Logo';
import { ThemeToggle } from './ui/ThemeToggle';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing.md};
  background-color: ${({theme}) => theme.colors.primary[500]};
  color: ${({theme}) => theme.colors.text.inverse};
`;

const StyledHeading = styled.h1`
  margin: 0;
`;

const LogoAndNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md};
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoAndNameContainer>
        <Logo />
        <StyledHeading>MedManage</StyledHeading>
      </LogoAndNameContainer>
      <ThemeToggle />
    </StyledHeader>
  );
};

export default Header;
