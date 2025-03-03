
export enum CareRecipientLabel {
  Mother = "mother",
  Father = "father",
  Sibling = "sibling",
  Pet = "pet",
  Other = "other",
}

export type CareRecipient = {
  recipientId: string;
  name: string;
  label: CareRecipientLabel;
  medications: Medication[];
  notes: string;
} & Avatar;

export type Medication = {
  medicationId: string;
  name: string;
  schedule: Schedule;
  type: MedicationType;
};

export enum MedicationType {
  Pill = "pill",
  Injection = "injection",
}

export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

type DailySchedule = {
  type: "daily";
  pattern?: never;
};

type WeeklySchedule = {
  type: "weekly";
  pattern?: never;
};

type BiweeklySchedule = {
  type: "biweekly";
  pattern?: never;
};

// TODO: Add back custom pattern scheduling
// type CustomSchedule = {
//   type: "custom";
//   pattern: string;
// };

type Interval = {
  day?: DayOfWeek;
  time: string;
  id: string;
} & HasTaken;

type HasTaken = {
  hasTaken: boolean;
};

type Avatar = {
  avatar: string;
};

export type Schedule = (DailySchedule | WeeklySchedule | BiweeklySchedule) & {
  intervals: Interval[];
};

export type Caregiver = {
  id: string;
  name: string;
  careRecipients: CareRecipient[];
} & Avatar;


export const mockCaregiverData = {
  id: "cg-123",
  name: "John Doe",
  avatar: "https://placehold.co/400/png",
  careRecipients: [
    {
      recipientId: "cr-456",
      name: "Jane Smith",
      avatar: "/recipient-images/mom.jpg",
      label: CareRecipientLabel.Mother,
      notes: "Some high level notes about the recipient's general habits and/or overall health",
      medications: [
        {
          medicationId: "med-789",
          name: "Aspirin",
          type: MedicationType.Pill,
          schedule: {
            type: "daily",
            intervals: [
              { id: "1", time: "08:00 AM", hasTaken: false },
              { id: "2", time: "06:00 PM", hasTaken: false }
            ]
          }
        },
        {
          medicationId: "med-101",
          name: "Metformin",
          type: MedicationType.Pill,
          schedule: {
            type: "weekly",
            intervals: [
              { id: "3", day: "Monday", time: "09:00 AM", hasTaken: false },
              { id: "4", day: "Thursday", time: "09:00 AM", hasTaken: false }
            ]
          }
        },
        {
          medicationId: "med-303",
          name: "Insulin",
          type: MedicationType.Injection,
          schedule: {
            type: "daily",
            intervals: [
              { id: "5", time: "06:00 AM", hasTaken: false },
              { id: "6", time: "10:00 AM", hasTaken: false },
              { id: "7", time: "02:00 PM", hasTaken: false },
              { id: "8", time: "06:00 PM", hasTaken: false }
            ]
          }
        }
      ]
    },
    {
      recipientId: "cr-202",
      name: "Charlie",
      avatar: "/recipient-images/dog.jpg",
      label: CareRecipientLabel.Pet,
      notes: "Some high level notes about the recipient's general habits and/or overall health",
      medications: [
        {
          medicationId: "med-202",
          name: "Lipitor",
          type: MedicationType.Pill,
          schedule: {
            type: "daily",
            intervals: [
              { id: "9", time: "07:30 AM", hasTaken: true },
              { id: "120", time: "07:30 PM", hasTaken: false }
            ]
          }
        },
        {
          medicationId: "med-404",
          name: "Warfarin",
          type: MedicationType.Pill,
          schedule: {
            type: "weekly",
            intervals: [
              { id: "10", day: "Sunday", time: "08:00 AM", hasTaken: false },
              { id: "11", day: "Tuesday", time: "08:00 PM", hasTaken: false },
            ]
          }
        }
      ]
    },
    {
      recipientId: "cr-457",
      name: "Mike Johnson",
      avatar: "/recipient-images/dad.jpg",
      label: CareRecipientLabel.Father,
      notes: "Some high level notes about the recipient's general habits and/or overall health",
      medications: [
        {
          medicationId: "med-203",
          name: "Lipitor",
          type: MedicationType.Pill,
          schedule: {
            type: "daily",
            intervals: [
              { id: "12", time: "07:30 AM", hasTaken: true },
              { id: "17", time: "02:30 PM", hasTaken: false },
              { id: "18", time: "07:30 PM", hasTaken: false },
            ]
          }
        },
        {
          medicationId: "med-404",
          name: "Warfarin",
          type: MedicationType.Pill,
          schedule: {
            type: "biweekly",
            intervals: [
              { id: "13", day: "Monday", time: "08:00 AM", hasTaken: false },
              { id: "14", day: "Monday", time: "08:00 PM", hasTaken: false },
              { id: "15", day: "Friday", time: "08:00 AM", hasTaken: false },
              { id: "16", day: "Friday", time: "08:00 PM", hasTaken: false }
            ]
          }
        }
      ]
    }
  ]
};
