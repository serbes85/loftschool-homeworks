import React from 'react';
import './Message.css';

export default class Message extends React.Component {
    render() {
        const {text} = this.props;

        return (
            <span className='message'>{text}</span>
        );
    }
}