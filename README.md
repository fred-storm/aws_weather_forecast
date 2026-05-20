# Daily weather forecast ⛈ ☀

This is my daily forecast application. I use this daily as my weather information source when planning my daily activities.  It is powered by the NWS api, and delivers an email to me every morning showing the next 24 hours of expected weather conditions. I utilized AWS Lambda and SQS to practice my skills with an event-driven application in a serverless environment.

## Techonologies

- JavaScript
- AWS Lambda
- AWS SQS
- AWS SNS
- AWS Event Bridge

## Program flow

The first Lambda function `getEndpoint.js`  builds a URL for the GET request based on the weather office for the user's location (statically set as a variable), then exports the URL to an SQS queue for pick up. The second function `getOutlook.js ` will take the URL from the SQS topic as JSON, build the GET request, and fetch the 7-day (14-period) forecast for the area, it then pulls out periods 0 and 1 to create a forcesat showing the current day and evening. It then delivers the JSON output to an SNS topic to be sent via email to anyone subscribed.

## Other files

Other files in this repository show my experimentation to work through getting the results I wanted with JavaScript and then moving them to the Lambda wrappers.  There are also email templates in HTML that I would like to use for the emails from SNS to improve the output quality and readability (make it pretty). I have also experimented with SES to attempt to send better emails.

## Next Steps

- Get templated emails working with SNS
- Dynamic location function for `getEndpoint.js`.


### Lessons learned 🤦‍♂️

- Getting Lambda messages through SQS queues and read on the receive end was more difficult than I first thought.  The solution was a simple import of the SQS module at the beginning of the Lambda, but it did take me a while to find the corresponding documentation for this.
- CRON jobs in Event Bridge do not adjust automatically for DST
- When trying to create a web display of the same application, the file index1.js did not have the expected result because I did not nest functions correctly.
- Passing formatting to the email body in SNS is not straightforward, though I need to work on this again.

-------------------------------------------

### Architecture
![Architecture Diagram](https://github.com/fred-storm/aws_weather_forecast/blob/main/wx-outlook.drawio.png "Architecture")
