import React, { Component } from 'react';
import { render } from 'enzyme';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (inputProps) => {
  return (WrappedComponent) => {
    return class withGivenProps extends Component {
      render() {
        return <WrappedComponent {...inputProps} />;
      }
    };
  };
};
