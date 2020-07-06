import React, { Component } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = (WrappedComponent) => {
  return class withLoading extends Component {
    render() {
      return this.props.loading ? (
        LoadingSpinner()
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/
const user = getLoggedInUser();

export const addLoggedInUser = (WrappedComponent) => {
  return class addLoggedInUser extends Component {
    render() {
      let userProps = {};
      for (let key in this.props) {
        if (key !== 'user') {
          userProps[key] = this.props[key];
        }
      }
      userProps.user = getLoggedInUser();
      return <WrappedComponent {...userProps} />;
    }
  };
};

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = (WrappedComponent) => {
  return class withSort extends Component {
    books = Array.from(this.props.books);

    sortString(a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    }
    render() {
      this.books.sort(this.sortString);
      return <WrappedComponent books={this.books} />;
    }
  };
};
