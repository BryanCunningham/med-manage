import { PropsWithChildren, ReactNode } from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export enum PillVariant {
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info",
  Default = "default",
}

type PillProps = {
  icon?: ReactNode;
  variant: PillVariant;
}

const statusColors = (theme: Theme, status: PillVariant) => {
  const colors = {
    [PillVariant.Success]: {
      color: theme.colors.status.success["700"],
    },
    [PillVariant.Warning]: {
      color: theme.colors.status.warning["700"],
    },
    [PillVariant.Error]: {
      color: theme.colors.status.error["700"],
    },
    [PillVariant.Info]: {
      color: theme.colors.status.info["700"],
    },
    [PillVariant.Default]: {
      color: theme.colors.primary["700"],
    },
  }

  return colors[status];
}

const StyledPill = styled.div<PillProps & { hasIcon?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, variant }) => statusColors(theme, variant)?.color};
  padding-block: ${({ theme }) => theme.spacing.sm};
  padding-inline: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ hasIcon, theme }) => hasIcon ? `calc(${theme.spacing.sm} + ${theme.spacing.lg} + ${theme.spacing.xs})` : theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme, variant }) => statusColors(theme, variant)?.color};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1;
`;

const IconContainer = styled.div<PillProps>`
  position: absolute;
  left: ${({ theme }) => theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);

  svg {
    display: flex;
    width: ${({ theme }) => theme.spacing.lg};
    height: auto;
    fill: ${({ theme, variant }) => statusColors(theme, variant)?.color};
`;

const Pill = ({ variant, children, icon }: PropsWithChildren<PillProps>) => {
  return <StyledPill hasIcon={!!icon} variant={variant}>{icon && <IconContainer variant={variant}>{icon}</IconContainer>}{children}</StyledPill>;
};

export default Pill;