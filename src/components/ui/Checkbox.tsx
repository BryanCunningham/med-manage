import styled from "@emotion/styled";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledCheckboxContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing.lg};
  height: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.dark};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

type CheckboxProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.body.bold};
  cursor: pointer;
`;

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  }

  return (
    <CheckboxContainer> 
      <StyledCheckboxContainer>
        <CheckboxInput id={label} type="checkbox" checked={checked} onChange={handleClick} />
      </StyledCheckboxContainer>
      <CheckboxLabel htmlFor={label}>{label}</CheckboxLabel>
    </CheckboxContainer>
    )
} 

export default Checkbox;