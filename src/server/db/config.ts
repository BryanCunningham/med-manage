import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1', // Change to your region
});

export default dynamoDb; 