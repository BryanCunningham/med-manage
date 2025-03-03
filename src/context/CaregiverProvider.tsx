'use client';
import { createContext, useContext, useState, useEffect, ReactNode, SetStateAction, Dispatch } from 'react';
import { Caregiver, Medication, CareRecipient, MedicationType, Schedule } from '@/caregiverData';
import { formatDate } from '@/utils';

export type AddMedicationFormData = {
  medicationName: string;
  medicationType: MedicationType | undefined;
  dayOfWeek: string;
  time: string;
  scheduleType: Schedule["type"] | undefined;
}

type CaregiverContextType = {
  addNewMedication: (recipientId: CareRecipient['recipientId'], medication: AddMedicationFormData) => Promise<void>;
  caregiver: Caregiver | undefined;
  formattedLongDate: string;
  formattedDayOfWeek: string;
  isCaregiverLoading: boolean;
  setCurrentCaregiver: Dispatch<SetStateAction<Caregiver | undefined>>;
};

const CaregiverContext = createContext<CaregiverContextType | undefined>(undefined);

export const CaregiverProvider = ({ children }: { children: ReactNode }) => {
  const [currentCaregiver, setCurrentCaregiver] = useState<Caregiver | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!currentCaregiver) {
      const fetchCaregiverData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/caregiver");
        const data = await response.json();
        setCurrentCaregiver(data);
      } catch (error) {
        console.error("Failed to fetch caregiver data", error);
      } finally {
        setIsLoading(false);
        }
      }

      fetchCaregiverData();
    };
  }, [currentCaregiver]);

  const formattedLongDate = formatDate(new Date(), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedDayOfWeek = formatDate(new Date(), { weekday: 'long' });
  
  const fakeAsyncOperation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
  const addNewMedication = async (recipientId: CareRecipient['recipientId'], medicationData: AddMedicationFormData): Promise<void> => {
    const newMedication: Medication = {
      medicationId: Date.now().toString(),
      name: medicationData.medicationName,
      schedule: {
        type: medicationData.scheduleType as Schedule["type"],
        intervals: [
          {
            id: Date.now().toString(),
            time: medicationData.time,
            hasTaken: false,
          }
        ]
      },
      type: medicationData.medicationType as MedicationType,
    }
    
    const updatedCareRecipients: CareRecipient[] | undefined = currentCaregiver?.careRecipients.map(recipient => {
      if (recipient.recipientId === recipientId) {
        return { ...recipient, medications: [...recipient.medications, newMedication] };
      }
      return recipient;
    });

    if (updatedCareRecipients && currentCaregiver) {
      setCurrentCaregiver({
        ...currentCaregiver,
        careRecipients: updatedCareRecipients
      });
    }

    await fakeAsyncOperation();
  }

  return (
    <CaregiverContext.Provider value={{ addNewMedication, caregiver: currentCaregiver, isCaregiverLoading: isLoading, formattedDayOfWeek, formattedLongDate, setCurrentCaregiver }}>
      {children}
    </CaregiverContext.Provider>
  );
};

export const useCareGiver = () => {
  const context = useContext(CaregiverContext);
  if (context === undefined) {
    throw new Error('useCareGiver must be used within a CaregiverProvider');
  }
  return context;
}; 