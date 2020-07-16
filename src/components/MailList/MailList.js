// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import styles from './MailList.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const MailList = props => {
  const { data, path, mod } = props;

  return (
    <div className={classNames(styles.container, mod)}>
      {data.map(element => (
        <Link
          key={element.id}
          to={`${path}/${element.id}`}
          className={styles.link}
        >
          {element.body.substr(0, 50)}
        </Link>
      ))}
    </div>
  );
};

export default MailList;
