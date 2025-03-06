import styled from '@emotion/styled';
import { useCallback, useMemo, useState } from 'react';

import { DayOfWeek, MedicationType, Schedule } from '../../caregiverData';
import { Button, Select, Surface, SurfaceVariant, TextField, TimeField } from '../ui';
import { TimeFieldState } from '../ui/fields/TimeField';
import { AddMedicationFormData } from '@/context/CaregiverProvider';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

type NullableLabel = '-';

const frequencyOptions = [
  { label: '-', value: '' },
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Bi-Weekly', value: 'bi-weekly' },
];

type DayOption = {
  label: DayOfWeek | NullableLabel;
  value: DayOfWeek | '';
}

const dayOptions: DayOption[] = [
  { label: '-', value: '' },
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' },
];

type AddMedicationFormProps = {
  onSubmit: (formData: AddMedicationFormData) => void;
  isLoading: boolean;
}

// TODO:Setup form validation
const AddMedicationForm = ({ onSubmit, isLoading = false }: AddMedicationFormProps) => {
  const [hasDayField, setHasDayField] = useState(false);
  const [formData, setFormData] = useState<AddMedicationFormData>({
    medicationName: '',
    medicationType: undefined,
    dayOfWeek: '',
    time: '',
    scheduleType: undefined,
  });

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'daily') {
      setHasDayField(false);
    } else {
      setHasDayField(true);
    }

    setFormData({ ...formData, scheduleType: value as Schedule["type"] });
  }

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof typeof formData) => {
    setFormData({ ...formData, [field]: event.target.value });
  }

  const handleTimeChange = (timeFieldState: TimeFieldState) => {
    const { time, meridian } = timeFieldState;

    setFormData({ ...formData, time: `${time} ${meridian}`});
  }

  const isFormComplete = useMemo(() => {
    // FIXME: Fake validation
    if (formData.scheduleType === 'daily') {
      return Boolean(formData.medicationName && formData.time);
    }

    return Object.values(formData).every((value) => value !== '');
  }, [formData]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
        
    if (isFormComplete) {
      onSubmit?.(formData);
    }

    // TODO: If not complete, highlight incomplete fields
  }, [formData, isFormComplete, onSubmit]);

  return (
    <Surface variant={SurfaceVariant.Outlined}>
      <StyledForm onSubmit={handleSubmit}>
        <TextField name="medicationName" label="Medication Name" onChange={(event) => handleFieldChange(event, "medicationName")} />
        <Select name="medicationType" label="Medication type" options={[{label: '-', value: ''}, { label: MedicationType.Pill, value: MedicationType.Pill }, { label: MedicationType.Injection, value: MedicationType.Injection }]} onChange={(event) => handleFieldChange(event, "medicationType")} />
        <Select name="frequency" label="Frequency" options={frequencyOptions} onChange={handleFrequencyChange} />
        {hasDayField && <Select name="dayOfWeek" options={dayOptions} label="Day of week" onChange={(event) => handleFieldChange(event, "dayOfWeek")} />}
        <TimeField onChange={handleTimeChange} />
        <Button disabled={!isFormComplete} type="submit" isLoading={isLoading}>Add Medication</Button>
      </StyledForm>
    </Surface>
  );
};

export default AddMedicationForm;
