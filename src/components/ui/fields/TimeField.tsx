import styled from '@emotion/styled';

import Select from './Select';
import { useCallback, useState } from 'react';

const TimeFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const timeOptions = [
  { label: '-', value: '' },
  { label: '12:00', value: '12:00' },
  { label: '12:30', value: '12:30' },
  { label: '1:00', value: '1:00' },
  { label: '1:30', value: '1:30' },
  { label: '2:00', value: '2:00' },
  { label: '2:30', value: '2:30' },
  { label: '3:00', value: '3:00' },
  { label: '3:30', value: '3:30' },
  { label: '4:00', value: '4:00' },
  { label: '4:30', value: '4:30' },
  { label: '5:00', value: '5:00' },
  { label: '5:30', value: '5:30' },
  { label: '6:00', value: '6:00' },
  { label: '6:30', value: '6:30' },
  { label: '7:00', value: '7:00' },
  { label: '7:30', value: '7:30' },
  { label: '8:00', value: '8:00' },
  { label: '8:30', value: '8:30' },
  { label: '9:00', value: '9:00' },
  { label: '9:30', value: '9:30' },
  { label: '10:00', value: '10:00' },
  { label: '10:30', value: '10:30' },
  { label: '11:00', value: '11:00' },
  { label: '11:30', value: '11:30' },
];

export type TimeFieldState = {
  time?: string;
  meridian?: string;
}

type TimeFieldProps = {
  onChange?: ({time, meridian}: TimeFieldState) => void;
}

const TimeField = ({ onChange }: TimeFieldProps) => {
  const [timeFieldState, setTimeFieldState] = useState<TimeFieldState>({
    time: '',
    meridian: '',
  });

  const handleTimeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (timeFieldState.meridian) {
      onChange?.({time: value, meridian: timeFieldState.meridian});
    }

    setTimeFieldState({...timeFieldState, time: value});
  }, [onChange, timeFieldState]);

  const handleMeridianChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (timeFieldState.time) {
      onChange?.({time: timeFieldState.time, meridian: value});
    }
    
    setTimeFieldState({...timeFieldState, meridian: value});
  }, [onChange, timeFieldState]);
  
  return (
    <TimeFieldContainer>
      <Select label="Hour" options={timeOptions} onChange={handleTimeChange} />
      <Select label="Meridian" options={[{ label: '-', value: ''}, { label: 'AM', value: 'am' }, { label: 'PM', value: 'pm' }]} onChange={handleMeridianChange} />
    </TimeFieldContainer>
  );
};

export default TimeField;
