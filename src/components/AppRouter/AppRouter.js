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
import { matchPath } from 'react-router';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from '../AppRouter/AppRouter.module.css';
import classNames from 'classnames';

const getTitle = pathname => {
  const pathMap = {
    inbox: '/app/inbox',
    outbox: '/app/outbox'
  };

  const getMatch = targetPath =>
    matchPath(pathname, {
      path: targetPath,
      exact: false,
      strict: false
    });

  if (getMatch(pathMap.inbox)) return 'Inbox';
  if (getMatch(pathMap.outbox)) return 'Outbox';

  return 'Home';
};

export default props => {
  const { pathname } = props.location;

  const matchInbox = matchPath(pathname, {
    path: '/app/inbox',
    exact: false,
    strict: false
  });
  console.log('App', props, matchInbox);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <ul className={styles.navList + 't-nav-list'}>
            <li className={styles.navElement}>
              <Link
                className={classNames(styles.link, 't-link-home', {
                  active: pathname === '/app'
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
                  active: pathname === '/app/inbox'
                })}
              >
                Inbox
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link
                to="/app/outbox"
                className={classNames(styles.link, 't-link-outbox', {
                  active: pathname === '/app/outbox'
                })}
              >
                Outbox
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{getTitle(pathname)}</h3>
          <Switch>
            <Route path="/app" component={Home} exact />
            <Route path="/app/inbox" component={InboxList} exact />
            <Route path="/app/outbox" component={OutboxList} exact />
            <Route path="/app/inbox/:id" component={InboxMail} exact />
            <Route path="/app/outbox/:id" component={OutboxMail} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};
