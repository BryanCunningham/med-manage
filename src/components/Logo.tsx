import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeProvider';

const StyledLogoContainer = styled.div`
  width: ${({theme}) => `calc(${theme.spacing.lg} * 2)`};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
  }
`;

const Logo = () => {
  const { theme }  = useTheme();

  return (
    <StyledLogoContainer>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="100%" height="100%" rx="30" fill={theme.colors.background.paper} />
        <g transform="translate(50,40)">
          <rect x="25" y="40" width="60" height="80" rx="10" fill={theme.colors.background.paper} stroke={theme.colors.text.primary} strokeWidth="2"/>
          <rect x="25" y="30" width="60" height="15" rx="5" fill={theme.colors.background.paper} stroke={theme.colors.text.primary} strokeWidth="2"/>
          
          <rect x="50" y="80" width="20" height="5" fill={theme.colors.text.primary}/>
          <rect x="57" y="73" width="5" height="20" fill={theme.colors.text.primary} />
          
          <circle cx="55" cy="10" r="20" fill={theme.colors.background.paper} stroke={theme.colors.text.primary} strokeWidth="2"/>
          <line x1="55" y1="10" x2="55" y2="0" stroke={theme.colors.text.primary} strokeWidth="2" strokeLinecap="round"/>
          <line x1="55" y1="10" x2="65" y2="10" stroke={theme.colors.text.primary} strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
    </StyledLogoContainer>
  );
};

export default Logo;