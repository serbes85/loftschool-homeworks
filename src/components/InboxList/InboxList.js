// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class InboxList extends Component {
  render() {
    const {
      data,
      location: { pathname }
    } = this.props;

    return <MailList data={data.inbox} path={pathname} mod="t-inbox-list" />;
  }
}

export default withData(InboxList);
