import styled from "@emotion/styled";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    list-style: none;

    & + & {
      margin-top: ${({ theme }) => theme.spacing.md};
    }
  }
`;

const List = ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLUListElement>) => {
  return <StyledList {...props}>{children}</StyledList>;
};

export default List;
