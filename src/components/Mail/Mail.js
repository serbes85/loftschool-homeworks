// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import styles from './Mail.module.css';

class Mail extends React.Component {
  render() {
    const { from, to, body } = this.props;

    return (
      <div className={styles.container}>
        <p className={from ? 't-mail-from' : 't-mail-to'}>
          {from ? 'From:' : 'To:'} <b>{from ? from : to}</b>
        </p>
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}
//////////////////////////////////////////////////////////////////////
// const Mail = props => {
//   const { from, to, body } = props;

//   return (
//     <div className={styles.container}>
//       <p className={from ? 't-mail-from' : 't-mail-to'}>
//         {from ? 'From:' : 'To:'} <b>{from ? from : to}</b>
//       </p>
//       <p className="t-mail-body">{body}</p>
//     </div>
//   );
// };

export default Mail;
