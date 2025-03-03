import dynamoDb from '../db/config';

const TABLE_NAME = 'Medications'; // Replace with your actual table name

export async function fetchCaregiver(id: string) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },

  };

  try {
    const result = await dynamoDb.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error('Error fetching caregiver:', error);
    throw new Error('Could not fetch caregiver');
  }
} 