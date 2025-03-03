import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export enum StatusVariant {
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info",
  Default = "default",
}

type StatusProps = {
  variant: StatusVariant;
}

const statusColors = (theme: Theme, status: StatusVariant) => {
  const colors = {
    [StatusVariant.Success]: {
      backgroundColor: theme.colors.status.success["100"],
      color: theme.colors.status.success["700"],
    },
    [StatusVariant.Warning]: {
      backgroundColor: theme.colors.status.warning["100"],
      color: theme.colors.status.warning["700"],
    },
    [StatusVariant.Error]: {
      backgroundColor: theme.colors.status.error["100"],
      color: theme.colors.status.error["700"],
    },
    [StatusVariant.Info]: {
      backgroundColor: theme.colors.status.info["100"],
      color: theme.colors.status.info["700"],
    },
    [StatusVariant.Default]: {
      backgroundColor: theme.colors.background.subtle,
      color: theme.colors.text.primary,
    },
  }

  return colors[status];
}

const StyledStatus = styled.div<StatusProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) => statusColors(theme, variant)?.backgroundColor};
  color: ${({ theme, variant }) => statusColors(theme, variant)?.color};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.body.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

const Status = ({ variant, children }: PropsWithChildren<StatusProps>) => {
  return <StyledStatus variant={variant}>{children}</StyledStatus>;
};

export default Status;
