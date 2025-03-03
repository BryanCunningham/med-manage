import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.heading.bold};
  margin: 0;
`;

type LabelProps = {
  htmlFor: string;
};

const Label = ({ htmlFor, children }: PropsWithChildren<LabelProps>) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
