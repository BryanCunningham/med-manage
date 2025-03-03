import styled from '@emotion/styled';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
