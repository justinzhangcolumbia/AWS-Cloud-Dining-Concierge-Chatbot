# AWS-Cloud-Dining-Concierge-Chatbot
AWS Cloud Dining Concierge Chatbot is a scalable distributed application leveraging message queues and notifications.
## About
Dining Concierge Chatbot will get restaurant suggestions using the Yelp API given a set of preferences (restaurant location, cuisine, dining time, number of people dining and phone number) that you give the chatbot through conversation and sends you the formatted restaurant suggestions through text message to the provided phone number using AWS SNS.

Enhanced customer service experience is provided by training three different intents using Amazon Lex namely:<br>
1. GreetingIntent:<br> 
It is used to provide a greeting message "Hi there, how can I help?" in response to any greeting message by the user like Hello, Hey, etc<br>  
2. ThankYouIntent:<br>
It is used to provide the message "You’re welcome" in response to any thank you message by the user like Thank you, Thanks, etc<br>
3. DiningSuggestionsIntent:<br>
It is used to push the information (restaurant location, cuisine, dining time, number of people dining and phone number) collected from the user in SQS. Another lambda function (queue worker) invoked in regular intervals with the help of CloudWatch event trigger pulls the message from the SQS and finds the restaurant suggestions using the Yelp API, stores them in Dynamo DB and sends the restaurant suggestions to the provided user's phone number using SNS.<br>   
Other AWS services used to develop the web application are S3, API Gateway, Cognito.<br>  

## How to Setup
[AWS-Cloud-Dining-Concierge-Chatbot-Part1-Instructions](AWS-Cloud-Dining-Concierge-Chatbot-Part1-Instructions.pdf)

[AWS-Cloud-Dining-Concierge-Chatbot-Part2-Instructions](AWS-Cloud-Dining-Concierge-Chatbot-Part2-Instructions.pdf)


