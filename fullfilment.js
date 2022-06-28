
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const { Payload } = require("dialogflow-fulfillment");
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    //agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    //agent.add(`I didn't understand`);
    //agent.add(`I'm sorry, can you try again?`);
  }


  function taxiFunctionHandler(agent) {
    const params = agent.parameters;
    const cabType = params.CabType;
    if(cabType){
      agent.end("Cab booked of type " + cabType.toLowerCase());
      return;
    }
    
    agent.add("Please select type of cab (Sedan/Suv)"); //Keep only 1 agent.add() for watsapp render
    agent.add(new Suggestion("Sedan"));
    agent.add(new Suggestion("Suv"));  
    
   }
  
  function buyFunctionHandler(agent) {
    const params = agent.parameters;
    const city = params.City;
    const startPrice = params.startPrice;
    const endPrice = params.endPrice;

   agent.end("Buy function handler for city= "+city+", startPrice = "+startPrice+", endPrice = "+endPrice); 

   }
  
  let intentMap = new Map();
  //intentMap.set('Default Welcome Intent', welcome);
  //intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('BookTaxi', taxiFunctionHandler);
  intentMap.set('Calculator.BuySell.Buy', buyFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});


/* Another way of using Google Assistant:

const functions = require('firebase-functions');
const {dialogflow, SimpleResponse, Suggestions } = require('actions-on-google');

const app = dialogflow();

app.intent('BookTaxi', (conv) => {
  const params = conv.parameters;
  const cabType = params.CabType;
  if(cabType){
    conv.ask("Cab booked of type " + cabType.toLowerCase());
    return;
  }
    
   conv.ask("Select your cab type (Sedan/SUV)");
   conv.ask(new Suggestions(["SUV","Sedan"]));
 
});

exports.dialogflowFirebaseFulfillment = functions
  .https.onRequest(app);
  
  
*/