import React from 'react';
import Chat from '../Chat/Chat.js';

export default class Message extends  Chat {
    render() {
        const {text} = this.props;

        return (
            <span className='message'>{text}</span>
        );
    }
}