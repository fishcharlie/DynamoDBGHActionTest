const { DynamoDBClient, ListTablesCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({ region: 'us-west-2', endpoint: 'http://localhost:8000', credentials: { accessKeyId: 'fake', secretAccessKey: 'fake' } });

(async () => {
	try {
		const data = await client.send(new ListTablesCommand({}));
		console.log(`${data.TableNames.length} tables found.`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();
