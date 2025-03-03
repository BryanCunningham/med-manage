import dynamoDb from '../db/config';

const TABLE_NAME = 'Medications'; // Replace with your actual table name

// export async function fetchMedications() {
//   const params = {
//     TableName: TABLE_NAME,
//   };

//   try {
//     const result = await dynamoDb.scan(params).promise();
//     return result.Items || [];
//   } catch (error) {
//     console.error('Error fetching medications:', error);
//     throw new Error('Could not fetch medications');
//   }
// }

export async function addMedication(medication: { name: string; schedule: string }) {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: new Date().toISOString(), // Use a better ID generation strategy in production
      name: medication.name,
      schedule: medication.schedule,
      active: true,
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return params.Item;
  } catch (error) {
    console.error('Error adding medication:', error);
    throw new Error('Could not add medication');
  }
}

export async function markDoseTaken(id: string) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: 'SET active = :active',
    ExpressionAttributeValues: {
      ':active': false,
    },
  };

  try {
    await dynamoDb.update(params).promise();
  } catch (error) {
    console.error('Error marking dose as taken:', error);
    throw new Error('Could not mark dose as taken');
  }
} 