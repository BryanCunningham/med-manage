import styled from "@emotion/styled";

import Button, { ButtonProps } from "./Button";

type RoundIconButtonProps = Omit<ButtonProps, 'iconPosition'>

const StyledButton = styled(Button)`
  border-radius: 50%;
  padding: ${({theme}) => theme.spacing.xs}
`;

const RoundIconButton = ({ ...props }: RoundIconButtonProps) => {
  return (
    <StyledButton {...props} />
  )
}

export default RoundIconButton;