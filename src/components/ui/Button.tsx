import styled from '@emotion/styled';
import { PropsWithChildren, ReactNode } from 'react';

import { Theme } from '../../styles/theme.types';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
};

export type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?:  ReactNode;
  iconPosition?: 'start' | 'end';
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const getButtonColor = (variant: ButtonVariant = ButtonVariant.Primary, theme: Theme) => {
  const colors = {
    [ButtonVariant.Success]: {
      backgroundColor: theme.colors.status.success["100"],
      hoverBackgroundColor: theme.colors.status.success["200"],
      color: theme.colors.status.success["700"],
    },
    [ButtonVariant.Warning]: {
      backgroundColor: theme.colors.status.warning["100"],
      hoverBackgroundColor: theme.colors.status.warning["200"],
      color: theme.colors.status.warning["700"],
    },
    [ButtonVariant.Danger]: {
      backgroundColor: theme.colors.status.error["100"],
      hoverBackgroundColor: theme.colors.status.error["200"],
      color: theme.colors.status.error["700"],
    },
    [ButtonVariant.Primary]: {
      backgroundColor: theme.colors.primary[500],
      hoverBackgroundColor: theme.colors.primary[700],
      color: theme.colors.text.inverse,
    },
    [ButtonVariant.Secondary]: {
      backgroundColor: "transparent",
      hoverBackgroundColor: theme.colors.primary[100],
      color: theme.colors.text.primary,
    },
  }

  return colors[variant];
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, variant }) => getButtonColor(variant, theme).backgroundColor};
  color: ${({ theme, variant }) => getButtonColor(variant, theme).color};
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme, variant }) => variant === ButtonVariant.Secondary ? `1px solid ${getButtonColor(variant, theme).color}` : "none"};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.body.bold};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, variant }) => getButtonColor(variant, theme).hoverBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  svg {
    display: flex;
    width: 100%;
    fill: ${({ theme, variant }) => getButtonColor(variant, theme).color};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0,
  min-width: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.spacing.md};
`;

const LoadingIndicator = styled.div`
  width: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.spacing.md};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary[200]};
  border-top-color: ${({ theme }) => theme.colors.primary[500]};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Button = ({
  variant = ButtonVariant.Primary,
  children,
  onClick,
  icon,
  iconPosition = "start",
  isLoading = false,
  disabled = false,
  type = "button",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton 
      {...props}
      disabled={disabled}
      onClick={onClick}
      variant={variant} 
      type={type}
    >
      {icon && iconPosition === "start" && !isLoading && <IconContainer>{icon}</IconContainer>}
      {isLoading && <LoadingIndicator />}
      {children}
      {icon && iconPosition === "end" && !isLoading && <IconContainer>{icon}</IconContainer>}
    </StyledButton>
  );
};

export default Button; 