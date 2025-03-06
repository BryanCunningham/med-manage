import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

import { CareRecipient } from '../../caregiverData';
import { Button, RoundIconButton, ButtonVariant, List, MaxWidthContainer, MedicationIcon, Pill, PillVariant, Status, StatusVariant, Surface} from '@/components';
import { useCareGiver, AddMedicationFormData } from '@/context/CaregiverProvider';
import { AddIcon, CheckCircleIcon } from '@/components/icons';
import { AddMedicationForm, WeeklyCalendar } from '@/components/care-recipient';

const GridContainer = styled.div<{isAddFormOpen: boolean}>`
  display: grid;
  grid-template-columns: 1fr 0;
  transition: grid-template-columns 0.5s ease;
  

  ${({ isAddFormOpen }) => isAddFormOpen && css`
    grid-template-columns: 1fr minmax(200px, 40%);
  `}
`;

const AddFormContainer = styled.div<{isAddFormOpen: boolean}>`
  align-self: flex-start;
  transition: opacity 0.5s ease;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-inline-start: ${({ theme }) => theme.spacing.lg};

  ${({ isAddFormOpen }) => isAddFormOpen && css`
    opacity: 1;
  `}
`;

const StartAlignedContainer = styled.div`
  align-items: flex-start;
`;

const RecipientHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecipientName = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.heading.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const NameAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ImageContainer = styled.div`
  position: relative;
  width: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  height: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 100%;
`;

const StyledMedList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const MedScheduleAndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  p {
    margin: 0;
    white-space: nowrap;
  }
`;

const StyledDayOfWeek = styled.h2`
  margin-block: ${({ theme }) => `${theme.spacing.md} 0`};
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

const HoverMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  padding-block: ${({ theme }) => theme.spacing.sm};
  padding-inline: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transform: translate3d(-50%, -80%, 0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 2;
  pointer-events: none;
`;

const ItemWithHoverMenu = styled.div`
  position: relative;
  
  &:hover, &:has([data-hover-menu]:hover) {
    [data-hover-menu] {
      opacity: 1;
      transform: translate3d(-50%, -100%, 0);
      pointer-events: auto;
    }
  }
`;

const RecipientDetail = () => {
  const router = useRouter();
  const { recipientId } = router.query;
  const { addNewMedication, caregiver, formattedDayOfWeek, setCurrentCaregiver } = useCareGiver();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [recipient, setRecipient] = useState<CareRecipient | null>(caregiver?.careRecipients.find((recipient) => recipient.recipientId === recipientId) || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingMedication, setIsAddingMedication] = useState(false);
  // const [isToastVisible, setIsToastVisible] = useState(false);

  //FIXME: caregiver data was not triggering re-render. This is a hack to force a re-render when the caregiver data changes
  useEffect(() => {
    setRecipient(caregiver?.careRecipients.find((recipient) => recipient.recipientId === recipientId) || null);
  }, [caregiver, recipientId]);

  useEffect(() => {
    if (recipientId && !recipient) {
      const fetchRecipient = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/recipients/${recipientId}`);
          const data = await response.json();
          setRecipient(data);
        } catch (error) {
          console.error('Error fetching recipient:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchRecipient();
    }
  }, [recipient, recipientId]);

  const handleAddMedicationClick = useCallback(() => {
    setIsAddFormOpen(!isAddFormOpen);
  }, [isAddFormOpen]);

  if (isLoading) return <div>Loading...</div>;
  if (!recipient) return <div>Recipient not found</div>;
  
  const todaysMeds = recipient.medications.filter((med) => med.schedule.type === "daily" || med.schedule.intervals.some((interval) => interval.day === formattedDayOfWeek));
  // const todaysMedsCount = todaysMeds.map((med) => console.log({med}));

  const handleTakeMedication = (medicationId: string, intervalId: string) => {
    // const results = fetch(`/api/caregiver`, {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     id: intervalId
    //   })
    // })

    // This would obviously all be handled on the BE
    const medToUpdate = recipient.medications.find((med) => med.medicationId === medicationId);
    const otherMeds = recipient.medications.filter((med) => med.medicationId !== medicationId);
    if (!medToUpdate) return;

    const intervalToUpdate = medToUpdate.schedule.intervals.find((interval) => interval.id === intervalId);

    if (!intervalToUpdate) return;

    const otherIntervals = medToUpdate.schedule.intervals.filter((interval) => interval.id !== intervalId);
    const updatedInterval = {
      ...intervalToUpdate,
      hasTaken: true
    }

    const updatedMedicationState = {
      ...medToUpdate,
      schedule: {
        ...medToUpdate.schedule,
        intervals: [
          ...(otherIntervals || []),
          updatedInterval
        ]
      }
    }

    const updatedRecipient = {
      ...recipient,
      medications: [
        ...otherMeds,
        updatedMedicationState
      ]
    }

    if (caregiver) {
      setCurrentCaregiver({
        ...caregiver,
        careRecipients: caregiver.careRecipients.map(recipient =>
          recipient.recipientId === updatedRecipient.recipientId ? updatedRecipient : recipient
        )
      });
    }
  }

  const handleAddMedication = async (formData: AddMedicationFormData) => {
    setIsAddingMedication(true);

    try {
      await addNewMedication(recipient.recipientId, formData);
      // setIsToastVisible(true);
      setIsAddingMedication(false);
      setIsAddFormOpen(false);
    } catch (error) {
      setIsAddingMedication(false);
      console.error('Error fetching recipient:', error);
    }
  }

  return (
    <MaxWidthContainer>
      <RecipientHeaderContainer>
        <NameAndImageContainer>
          <ImageContainer>
            <StyledImage fill src={recipient.avatar} alt={recipient.name} />
          </ImageContainer>
          <div>
            <Status variant={StatusVariant.Default}>{recipient.label}</Status>
            <RecipientName>{recipient.name}</RecipientName>
          </div>
        </NameAndImageContainer>
        <Button icon={<AddIcon />} onClick={handleAddMedicationClick} variant={ButtonVariant.Primary}>
          Add Medication
        </Button>
      </RecipientHeaderContainer>
      <GridContainer isAddFormOpen={isAddFormOpen}>
        <StartAlignedContainer>
          <Surface>
            <Status variant={StatusVariant.Default}>Today</Status>
            <StyledDayOfWeek>{formattedDayOfWeek}</StyledDayOfWeek>
            <StyledMedList>
              {todaysMeds?.map((medication) => {
                return (
                  medication.schedule.intervals.map((interval) => {
                    return (
                      <ItemWithHoverMenu key={medication.medicationId}>
                        <Pill
                          key={interval.id} icon={interval.hasTaken ? <CheckCircleIcon /> : <MedicationIcon med={medication} />}
                          variant={interval.hasTaken ? PillVariant.Success : PillVariant.Info}
                        >
                          {medication.name} {interval.time}
                        </Pill>
                        <HoverMenu data-hover-menu>
                          <MedScheduleAndStatus key={interval.day}>
                            <p>Mark as taken</p>
                            <RoundIconButton
                              onClick={() => handleTakeMedication(medication.medicationId, interval.id)}
                              icon={<CheckCircleIcon />}
                              variant={interval.hasTaken ? ButtonVariant.Success : ButtonVariant.Secondary}
                            />
                          </MedScheduleAndStatus>
                        </HoverMenu>
                      </ItemWithHoverMenu>
                    );
                  })
                );
              })}
            </StyledMedList>
          </Surface>
          <WeeklyCalendar medications={recipient.medications} />
        </StartAlignedContainer>
        <AddFormContainer isAddFormOpen={isAddFormOpen}>
          <AddMedicationForm isLoading={isAddingMedication} onSubmit={handleAddMedication} />
        </AddFormContainer>
      </GridContainer>
      {/* TODO: Get Toast message to work */}
      {/* <Toast message="Medication added successfully" isVisible={isToastVisible} type="success" /> */}
    </MaxWidthContainer>
  );
};

export default RecipientDetail; 