'use client';

import styled from '@emotion/styled';
import { useTheme } from '../../context/ThemeProvider';
import Button, { ButtonVariant } from './Button';

const ToggleButton = styled(Button)`
  position: relative;
  background: ${({ theme }) => theme.colors.background.paper};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  p {
    margin: 0;
  }
`;

const themeIcons = {
  light: '☀️',
  dark: '🌙',
  'high-contrast': '👁️'
} as const;

export const ThemeToggle = () => {
  const { themeType, cycleTheme } = useTheme();
  const variant = themeType === 'light' ? ButtonVariant.Secondary : ButtonVariant.Primary;

  return (
    <ToggleContainer>
      <p>Toggle Theme</p>
      <ToggleButton
        variant={variant}
        onClick={cycleTheme}
        icon={themeIcons[themeType]}
      />
    </ToggleContainer>
  );
}; 