type Medication = {
  id: string;
  name: string;
  schedule: string;
  status: string;
};

export async function fetchMedications() {
  const response = await fetch('/api/medications');
  if (!response.ok) throw new Error('Failed to fetch medications');
  return response.json();
}

export async function addMedication(medication: Medication) {
  const response = await fetch('/api/medications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(medication),
  });
  if (!response.ok) throw new Error('Failed to add medication');
  return response.json();
}

export async function markDoseTaken(id: string) {
  const response = await fetch(`/api/medications/${id}/mark-taken`, {
    method: 'PUT',
  });
  if (!response.ok) throw new Error('Failed to mark dose as taken');
  return response.json();
}