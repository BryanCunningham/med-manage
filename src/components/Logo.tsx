import styled from '@emotion/styled';
import { ClockIcon } from './icons';

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({theme}) => `calc(${theme.spacing.lg} * 2)`};
  height: ${({theme}) => `calc(${theme.spacing.lg} * 2)`};
  background-color: ${({theme}) => theme.colors.background.paper};
  border-radius: ${({theme}) => theme.borderRadius.lg};

  svg {
    fill: ${({theme}) => theme.colors.text.primary};
    width: ${({theme}) => theme.spacing.lg};
  }
`;

const Logo = () => {

  return (
    <StyledLogoContainer>
      <ClockIcon />
    </StyledLogoContainer>
  );
};

export default Logo;