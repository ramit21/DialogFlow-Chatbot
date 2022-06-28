import React , { Component } from 'react'

class DialogFlowChat extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render(){
        return (
            <df-messenger
            intent="WELCOME"
            chat-title="Monyx Bot"
            agent-id="XXXXXXXXXXXXXXX"
            language-code="en"
            ></df-messenger>
        );
    }

}

export default DialogFlowChat;
