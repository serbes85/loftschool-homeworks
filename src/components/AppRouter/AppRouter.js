// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from '../AppRouter/AppRouter.module.css';
import classNames from 'classnames';

export default props => {
  const { pathname } = props.location;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <ul className={styles.navList + 't-nav-list'}>
            <li className={styles.navElement}>
              <Link
                className={classNames(styles.link, 't-link-home', {
                  active: props.location.pathname === '/app'
                })}
                to="/app"
              >
                Home
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link
                to="/app/inbox"
                className={classNames(styles.link, 't-link-inbox', {
                  active: props.location.pathname === '/app/inbox'
                })}
              >
                Inbox
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link
                to="/app/outbox"
                className={classNames(styles.link, 't-link-outbox', {
                  active: props.location.pathname === '/app/outbox'
                })}
              >
                Outbox
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>
            {pathname === '/app'
              ? 'Home'
              : pathname === '/app/inbox'
                ? 'Inbox'
                : 'Outbox'}
          </h3>
          <Switch>
            <Route path="/app" component={Home} exact />
            <Route path="/app/inbox" component={InboxList} exact />
            <Route path="/app/outbox" component={OutboxList} exact />
            <Route path="/app/inboxMail/:id" component={InboxMail} exact />
            <Route path="/app/outboxMail/:id" component={OutboxMail} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};
