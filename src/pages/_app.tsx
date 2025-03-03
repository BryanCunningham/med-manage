import styled from '@emotion/styled';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '../context/ThemeProvider';
import { CaregiverProvider } from '../context/CaregiverProvider';
import { Header } from '@/components';

const StyledContentContainer = styled.main`
  height: 100%;
  padding-block: ${({ theme }) => `calc(${theme.spacing.xl} * 2)`};
  padding-inline: ${({ theme }) => theme.spacing.lg};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CaregiverProvider>
        <Header />
        <StyledContentContainer>
          <Component {...pageProps} />
        </StyledContentContainer>
      </CaregiverProvider>
    </ThemeProvider>
  );
}

export default MyApp; 