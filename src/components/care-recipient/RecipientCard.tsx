import Image from "next/image";
import styled from "@emotion/styled";

import { CareRecipient } from "@/caregiverData";
import { Card, Status, StatusVariant, Pill, PillVariant } from "../ui";
import MedicationIcon from "./MedicationIcon";
import { useCareGiver } from "@/context/CaregiverProvider";

const RecipientName = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.heading.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const RecipientSummary = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
`;

const StatusContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

type RecipientCardProps = {
  recipient: CareRecipient;
}

const RecipientCard = ({ recipient }: RecipientCardProps) => {
  const { formattedDayOfWeek } = useCareGiver();
  
  const todaysMeds = recipient.medications.filter((med) => med.schedule.type === "daily" || med.schedule.intervals.some((interval) => interval.day === formattedDayOfWeek));
  
  return (
    <Card>
      <ImageContainer>
        <StyledImage fill src={recipient.avatar} alt={recipient.name} />
      </ImageContainer>
      <StatusContainer>
        <Status variant={StatusVariant.Default}>{recipient.label}</Status>
      </StatusContainer>
      <RecipientName>{recipient.name}</RecipientName>
      <RecipientSummary>{recipient.notes}</RecipientSummary>
      <Pill icon={<MedicationIcon med={todaysMeds[0]} />} key={todaysMeds[0].medicationId} variant={PillVariant.Info}>{todaysMeds.length} today</Pill>
    </Card>
  );
};

export default RecipientCard;
