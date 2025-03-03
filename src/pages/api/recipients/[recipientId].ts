import type { NextApiRequest, NextApiResponse } from 'next';
import { CareRecipient } from '../../../caregiverData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CareRecipient | { error: string }>
) {
  const { recipientId } = req.query;

  try {
    // Get the host from the request headers
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = req.headers.host;
    
    const response = await fetch(`${protocol}://${host}/api/caregiver`);
    const data = await response.json();
    
    const recipient = data.careRecipients.find(
      (r: CareRecipient) => r.recipientId === recipientId
    );

    if (!recipient) {
      res.status(404).json({ error: 'Recipient not found' });
      return;
    }

    res.status(200).json(recipient);
  } catch (error) {
    console.error('Error fetching recipient:', error);
    res.status(500).json({ error: 'Failed to fetch recipient' });
  }
} 