# DialogFlow-Chatbot
## Create a Diagflow chatbot, integrate it with React web app using Kommunicate

Steps to integrate Dialogflow with Kommunicate, 

https://www.kommunicate.io/blog/integrate-bot-using-dialogflow-in-kommunicate/

and then with the web app:
https://docs.kommunicate.io/docs/web-installation#react-js

Twilio Watsapp integration:
https://www.youtube.com/watch?v=3KSitm7X6rA&t=0s

Commands on dialogflow-integration suite:
```
gcloud builds submit --tag gcr.io/hotel-booking-fabo/dialogflow-twilio

gcloud beta run deploy --image gcr.io/hotel-booking-fabo/dialogflow-twilio --update-env-vars GOOGLE_APPLICATION_CREDENTIALS=hotel-booking-fabo-39faec25d620.json --memory 1Gi
```

To run the poc:
```
npm run dev
```
