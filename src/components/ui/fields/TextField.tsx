import styled from '@emotion/styled';

import Label from './Label';
import {FieldAndLabelContainer} from './FieldAndLabelContainer';

const StyledInput = styled.input`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary[900]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

type TextFieldProps = {
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
};

const TextField = ({ label, value, onChange, name }: TextFieldProps) => {
  return (
    <FieldAndLabelContainer>
      <Label htmlFor={label}>{label}</Label>
      <StyledInput type="text" id={label} name={name} value={value} onChange={onChange} />
    </FieldAndLabelContainer>
  );
};

export default TextField;
