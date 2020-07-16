// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends Component {
  render() {
    const { data } = this.props;
    const { pathname } = this.props.location;

    return <MailList path={pathname} data={data.outbox} mod="t-outbox-list" />;
  }
}

export default withData(OutboxList);
