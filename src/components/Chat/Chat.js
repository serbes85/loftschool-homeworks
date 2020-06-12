import React from 'react';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: '',
        };
    }
    changeInputMessage = event => {
        this.setState({messageInput: event.target.value});
    };
    sendMessageOnEnter = event => {
        if(event.key === 'Enter') {
            this.setState(({messages: [{text: this.state.messageInput}]}));
            this.setState({messageInput: '' });
            // console.log( 'click Enter', ({messages: this.state.messageInput}) );
            // console.log( 'click Enter', ({messages: [{text: this.state.messageInput}]}) );
        }
    }
    render() {
        return (
            <div className="chat">
                <input className="input-message" value={this.state.messageInput} 
                onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}></input>
            </div>
        );
    }
}