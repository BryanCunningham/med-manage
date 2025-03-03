import styled from "@emotion/styled";

const StyledSurface = styled.div<SurfaceProps>`
  background-color: ${({ theme, variant }) => variant === 'filled' ? theme.colors.background.paper : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: ${({ theme, variant }) => variant === 'outlined' ? `2px solid ${theme.colors.primary[200]}` : 'none'};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme, variant }) => variant === 'filled' ? theme.shadows.lg : 'none'};
`;

export enum SurfaceVariant {
  Filled = 'filled',
  Outlined = 'outlined',
}

type SurfaceProps = {
  children: React.ReactNode;
  variant?: SurfaceVariant;
};

const Surface = ({ children, variant = SurfaceVariant.Filled }: SurfaceProps) => {
  return <StyledSurface variant={variant}>{children}</StyledSurface>;
};

export default Surface;
