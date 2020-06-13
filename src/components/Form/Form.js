import React from 'react';
import image from './assets/bond_approve.jpg';
import './Form.css';

class Form extends React.Component {
  state = {
    formState: [
      {
        inputName: 'firstName',
        inputLabel: 'Имя',
        value: '',
        trueValue: 'James',
        status: 'null',
        errMessage: ''
      },
      {
        inputName: 'lastName',
        inputLabel: 'Фамилия',
        value: '',
        trueValue: 'Bond',
        status: 'null',
        errMessage: ''
      },
      {
        inputName: 'password',
        inputLabel: 'Пароль',
        value: '',
        trueValue: '007',
        status: 'null',
        errMessage: ''
      }
    ],
    isLogin: false
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChangeInput = (event) => {};
  handleClearInput = () => {};

  render() {
    let state = this.state.formState.slice();
    console.log(state);

    if (this.state.isLogin) {
      return <Profile />;
    } else {
      return (
        <div className="app-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            {state.map((elem) => {
              return (
                <Input
                  key={elem.inputLabel}
                  inputName={elem.inputName}
                  inputLabel={elem.inputLabel}
                  inputValue={elem.value}
                />
              );
            })}
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        </div>
      );
    }
  }
}

class Input extends React.Component {
  render() {
    return (
      <p className="field">
        <label className="field__label" htmlFor={this.props.inputName}>
          <span className="field-label">{this.props.inputLabel}</span>
        </label>
        <input
          className={'field__input field-input t-input-' + this.props.inputName}
          type="text"
          name={this.props.inputName}
          value={this.props.inputValue}
        />
        <span
          className={'field__error field-error t-error-' + this.props.inputName}
        ></span>
      </p>
    );
  }
}

function Profile(props) {
  return (
    <div className="app-container">
      <img className="t-bond-image" src={image} alt="bond approve" />
    </div>
  );
}

export default Form;
