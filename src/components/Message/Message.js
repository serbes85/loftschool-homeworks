import React from 'react';

export default class Message extends React.Component {
    render() {
        const {text} = this.props;

        return (
            <span className='message'>{text}</span>
        );
    }
}