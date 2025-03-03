import styled from "@emotion/styled";
import { useCallback } from "react";
import Label from './Label';
import { FieldAndLabelContainer } from './FieldAndLabelContainer';
const StyledSelect = styled.select`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary[900]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  onChange?:React.ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  value?: string;
};

const Select = ({ label, options, onChange, name, value }: SelectProps) => {

  const handleChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((event) => {
    onChange?.(event);
  }, [onChange]);

  return (
    <FieldAndLabelContainer>
      <Label htmlFor={label}>{label}</Label>
      <StyledSelect id={label} name={name} onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
    </FieldAndLabelContainer>
  );
};

export default Select;
