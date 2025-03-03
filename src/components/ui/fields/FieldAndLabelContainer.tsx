import styled from "@emotion/styled";

export const FieldAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: 80ch;
`;
