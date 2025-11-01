const input = {
  "Destination": {
    "BccAddresses": [],
    "CcAddresses": [
      
    ],
    "ToAddresses": [
      "adam.frederick04+sestesting@gmail.com"
    ]
  },
  "Message": {
    "Body": {
      "Html": {
        "Charset": "UTF-8",
        "Data": "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
      },
      "Text": {
        "Charset": "UTF-8",
        "Data": "This is the message body in text format."
      }
    },
    "Subject": {
      "Charset": "UTF-8",
      "Data": "Test email"
    }
  },
  "ReplyToAddresses": [],
  "ReturnPath": "",
  "ReturnPathArn": "",
  "Source": "sender@example.com",
  "SourceArn": ""
};
const command = new SendEmailCommand(input);
const response = await client.send(command);
/* response ==
{
  "MessageId": "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
}
*\

// example id: sendemail-1469049656296
