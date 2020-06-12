import React from 'react';
import Message from '../Message';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: '',
        };
    }
    changeInputMessage = event => {
        this.setState({ messageInput: event.target.value });
    };
    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(({ messages: [{ text: this.state.messageInput }] }));
            this.setState({ messageInput: '' });
            // console.log( 'click Enter', ({messages: this.state.messageInput}) );
            // console.log( 'click Enter', ({messages: [{text: this.state.messageInput}]}) );
        }
    }
    render() {
        const { messages, messageInput } = this.state;
        
        const list = messages.map((item, index) => {
            return <Message text={item.text} key={index} />
        });
        return (
            <div className="chat">
                <ul className="list">
                    {messages.length ? list : null}
                </ul>
                <input
                    type="text"
                    className='input-message'
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    value={messageInput}
                    placeholder='Enter text please'
                />
            </div>
        );
    }
}