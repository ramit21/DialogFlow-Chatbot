# DialogFlow-Chatbot

## Problem statement: Create a Diagflow chatbot, and use it with both React web-app and Whatsapp.

The dialogflow based Chatbot exportd as zip is part of the project. 
Import it into your Google account, and update agent id etc in dialogFlowChat.js file (currently its masked)

Fullfilment code (Google Function) also added as fullfilment.txt

This POC contains a react based web application which uses Dialogflow based chatbot. To run the web app, do:
```
npm install
npm run dev
```

To integrate with Whatsapp, you will need to to integrate via 3rd party providers like Twilio, details below.
But note that when integrating with Whatsapp, the support to render button suggestions is very limited.

### Basics
1. Intent: What action user is trying to take. Eg. Book a hotel, or book a taxi etc.
2. Entities: Pre defined data slots that the bot would try to populate from user utterances. 
Eg. Create an entity for RoomType with values of King/Queen/Deluxe. Ask user a question to choose his room type, and
based on the text entered, the roomType slot gets populated. This slot value can then be referenced in the fullfilment code. 
3. You can use pre defined datatypes to define what valid values an entity can take. Eg. defining a city of type 
sys.geo_city. Now if you enter Simla for example, it will automatically be changed to 'Shimla'. In case of invalid value,
 prompt asking for the value will be shown again.
4. Fullfilment: Enable Fullfilment webhook option for the intents that you want to handle via code. 
Create handlers in the fullfilment code for respective intents. You can mark some of the entities as not required from 
the console, and instead check for them in the fulfilment code, and ask user for values for the same.
This way you can achieve if-else branching for fullfilling all entities, and control the flow of conversation from code itself.
5. Rich responses: https://developers.google.com/assistant/df-asdk/rich-responses
6. Contexts: In this bot, we have given menu options for the user to choose from, and based on user's selection, further menu options 
are presented. This is achieved by passing the output of parent context as input of the child context.

### Whatsapp integrations

Twilio Watsapp integration:
https://www.youtube.com/watch?v=3KSitm7X6rA&t=0s

Commands on dialogflow-integration suite:
```
gcloud builds submit --tag gcr.io/hotel-booking-fabo/dialogflow-twilio

gcloud beta run deploy --image gcr.io/hotel-booking-fabo/dialogflow-twilio --update-env-vars GOOGLE_APPLICATION_CREDENTIALS=hotel-booking-fabo-39faec25d620.json --memory 1Gi
```

Twilio does not support rendering Google suggestion buttons at the time of this writing. 
To achieve the same, explore other third party solutions like below:

Steps to integrate Dialogflow with Kommunicate, 

https://www.kommunicate.io/blog/integrate-bot-using-dialogflow-in-kommunicate/

and then with the web app:
https://docs.kommunicate.io/docs/web-installation#react-js





