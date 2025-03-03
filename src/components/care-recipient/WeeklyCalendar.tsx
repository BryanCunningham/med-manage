import styled from "@emotion/styled";

import { Medication } from "@/caregiverData";
import { formatDate } from "@/utils/formatDate";
import getRemainingDays from "@/utils/getRemainingDays";
import { useCareGiver } from "@/context/CaregiverProvider";
import { Surface, SurfaceVariant, Status, StatusVariant, Pill, PillVariant } from "@/components";
import { PillIcon } from "../icons";

type WeeklyCalendarProps = {
  medications: Medication[];
}

const RemainingDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const StyledDayOfWeek = styled.h2`
  margin-block: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.primary[500]};
`;


const WeeklyCalendar = ({ medications }: WeeklyCalendarProps) => {
  const { formattedDayOfWeek } = useCareGiver();
  const todayDate = new Date();
  const month = formatDate(todayDate, { month: 'long' });
  const restOfDays = getRemainingDays(formattedDayOfWeek);

  return (
    <RemainingDaysContainer>
      {restOfDays.map((day, index) => {
        const medCountsByDay = medications.filter((medication) => {
          return medication.schedule.type === "daily" || medication.schedule.intervals.find((interval) => interval.day === day)
        })

        const label = medCountsByDay.length === 0 ? "No medications" : medCountsByDay.length === 1 ? "1 medication" : `${medCountsByDay.length} medications`;

        return (
          <Surface variant={SurfaceVariant.Outlined} key={day}>
            <Status variant={StatusVariant.Default}>{`${month} ${todayDate.getDate() + index}`}</Status>
            <StyledDayOfWeek>{day}</StyledDayOfWeek>
            <Pill icon={<PillIcon />} variant={PillVariant.Default}>{label}</Pill>
          </Surface>
        )
      })}
    </RemainingDaysContainer>
  );
};

export default WeeklyCalendar;
