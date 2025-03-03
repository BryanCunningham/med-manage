"use client";
import styled from "@emotion/styled";
import Link from "next/link";

import RecipientCard from "./care-recipient/RecipientCard";
import List from "./ui/List";
import { useCareGiver } from "@/context/CaregiverProvider";
import { MaxWidthContainer } from "./ui";

const CaregiverName = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.heading.bold};
`;

const DateText = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const RecipientCardContainer = styled(List)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
  }
`;

const CaregiverDashboard = () => {
  const { caregiver, isCaregiverLoading, formattedLongDate } = useCareGiver();

  if (isCaregiverLoading) return <p>Loading caregiver data...</p>;

  if (!caregiver) return <p>No caregiver data found</p>;

  return (
    <MaxWidthContainer>
      <CaregiverName>Welcome back, {caregiver.name}</CaregiverName>
      <DateText>Today is {formattedLongDate}</DateText>
      <RecipientCardContainer>
        {caregiver?.careRecipients.map((recipient) => (
          <StyledLink href={`/recipients/${recipient.recipientId}`} key={recipient.recipientId}>
            <li key={recipient.recipientId}>{
              <RecipientCard recipient={recipient} />
            }</li>
          </StyledLink>
        ))}
      </RecipientCardContainer>
    </MaxWidthContainer>
  );
}

export default CaregiverDashboard;