import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };
  authorize = (email, password) => {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({
        email,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    }
  };
  logout = () => {
    this.setState({ isAuthorized: false });
  };
  getProviderValue = () => {
    return {
      // email: this.state.email,
      // authorizeError: this.state.authorizeError,
      // isAuthorized: this.state.isAuthorized,
      ...this.state,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>; // В атрибуте value передаем ф-цию,
    // которую с помощью context прокинем
    // другим компонетам
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
