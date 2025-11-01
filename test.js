"{\"version\":\"1.0\",\"timestamp\":\"2024-05-08T11:00:22.042Z\",\"requestContext\":{\"requestId\":\"e4da6823-e621-41f8-961c-56b85b8b384f\",\"functionArn\":\"arn:aws:lambda:us-east-1:767397778099:function:getEndpointfunction:$LATEST\",\"condition\":\"Success\",\"approximateInvokeCount\":1},\"requestPayload\":{\"version\":\"0\",\"id\":\"505cf71e-66a0-e11d-4ba2-30fbaf6bc8f1\",\"detail-type\":\"Scheduled Event\",\"source\":\"aws.events\",\"account\":\"767397778099\",\"time\":\"2024-05-08T11:00:00Z\",\"region\":\"us-east-1\",\"resources\":[\"arn:aws:events:us-east-1:767397778099:rule/outlookRun\"],\"detail\":{}},\"responseContext\":{\"statusCode\":200,\"executedVersion\":\"$LATEST\"},\"responsePayload\":\"https://api.weather.gov/gridpoints/LIX/101,108/forecast\"}"



//SQS message a186fb13-1c38-4064-9dec-df7512f2726a: "{\"version\":\"1.0\",\"timestamp\":\"2024-05-08T11:00:22.042Z\",\"requestContext\":{\"requestId\":\"e4da6823-e621-41f8-961c-56b85b8b384f\",\"functionArn\":\"arn:aws:lambda:us-east-1:767397778099:function:getEndpointfunction:$LATEST\",\"condition\":\"Success\",\"approximateInvokeCount\":1},\"requestPayload\":{\"version\":\"0\",\"id\":\"505cf71e-66a0-e11d-4ba2-30fbaf6bc8f1\",\"detail-type\":\"Scheduled Event\",\"source\":\"aws.events\",\"account\":\"767397778099\",\"time\":\"2024-05-08T11:00:00Z\",\"region\":\"us-east-1\",\"resources\":[\"arn:aws:events:us-east-1:767397778099:rule/outlookRun\"],\"detail\":{}},\"responseContext\":{\"statusCode\":200,\"executedVersion\":\"$LATEST\"},\"responsePayload\":\"https://api.weather.gov/gridpoints/LIX/101,108/forecast\"}"




console.log('Loading function');

import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";  


export const handler = async function(event, context) {  
    console.log("\n\nLoading handler\n\n");
    console.log(event);
    const client = new SNSClient();
    const input = {
        TopicArn: "arn:aws:sns:us-east-1:767397778099:outlook",
        Message: JSON.stringify(event),
    };
    const sendCommand = new PublishCommand(input);
    const response = await client.send(sendCommand);
    const sendMessage = response;
    return sendMessage;
};

