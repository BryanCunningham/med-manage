import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCaregiverData } from '@/caregiverData';
import { addMedication, markDoseTaken } from '@/server/handlers/medications';
// import { fetchMedications, addMedication, markDoseTaken } from '@/server/handlers/medications';
// import { fetchCaregiver } from '@/server/handlers/caregiver';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        // const { id } = req.body;
        // const caregivers = await fetchCaregiver(id);
        // res.status(201).json(caregivers);

        const caregiver = await mockCaregiverData;
        res.status(200).json(caregiver);
        break;
      case 'POST':
        const medication = req.body;
        const newMedication = await addMedication(medication);
        res.status(201).json(newMedication);
        break;
      case 'PUT':
        const { id } = req.body;
        await markDoseTaken(id);
        res.status(200).json({ message: "Medication marked as taken" });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}