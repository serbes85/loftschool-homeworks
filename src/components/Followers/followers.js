import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {
  getIsLoading,
  getData,
  getError
} from '../../modules/Followers/reducer';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { isLoading, data, error } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла ошибка</p>;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.length > 0 &&
          data.map(follower => (
            <div className={styles.follower} key={follower.id}>
              <img
                className={styles.followerImg}
                src={follower.avatar_url}
                alt={follower.login}
              />
              <p className={styles.followerLogin}>{follower.login}</p>
            </div>
          ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
  error: getError(state)
}))(Followers);
