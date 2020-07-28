import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getIsLoading, getData, getError } from '../../modules/User/reducer';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { isLoading, data, error } = this.props;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла ошибка</p>;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          {data.avatar_url && (
            <img
              src={data.avatar_url}
              className={styles.image}
              alt={data.login}
            />
          )}
        </div>
        <div>
          <p className="t-user-name">{data.login}</p>
        </div>
        {/* Отобразите данные о пользователе */}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state),
  error: getError(state)
}))(UserInfo);
