import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  isVisible: boolean;
  type: 'success' | 'error';
}

const StyledToast = styled.div<{ type: ToastProps['type'] }>`
  position: fixed;
  top: 0;
  right: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, type }) => type === 'success' ? theme.colors.status.success[500] : theme.colors.status.error[500]};
  color: ${({ theme, type }) => type === 'success' ? theme.colors.status.success[900] : theme.colors.status.error[900]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.body.bold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  transform: translate3d(${({ theme }) => `0, ${theme.spacing.xxl}, 0`});
  transition: transform 0.5s ease-in-out;
`;

const Toast = ({ message, isVisible, type }: ToastProps) => {

  const [isVisibleToast, setIsVisibleToast] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisibleToast(false);
      }, 6000);
    }
  }, [isVisible]);

  return isVisibleToast && <StyledToast type={type}>{message}</StyledToast>;
};

export default Toast;
