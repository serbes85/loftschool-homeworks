import React from 'react';
import image from './assets/bond_approve.jpg';
import './Form.css';

class Form extends React.Component {
  state = {
    formState: [
      {
        inputName: 'firstname',
        inputLabel: 'Имя',
        value: '',
        trueValue: 'james',
        status: 'null',
        errMessage: ''
      },
      {
        inputName: 'lastname',
        inputLabel: 'Фамилия',
        value: '',
        trueValue: 'bond',
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
  errorMessage = {
    firstname: {
      id: 0,
      errMessageEmpty: 'Нужно указать имя',
      errMessageIncorrect: 'Имя указано не верно'
    },
    lastname: {
      id: 1,
      errMessageEmpty: 'Нужно указать фамилию',
      errMessageIncorrect: 'Фамилия указана не верно'
    },
    password: {
      id: 2,
      errMessageEmpty: 'Нужно указать пароль',
      errMessageIncorrect: 'Пароль указан не верно'
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let form = e.target;
    // console.log(form);

    for (let key in this.errorMessage) {
      let id = this.errorMessage[key].id;
      let currentElement = this.state.formState[id];
      let state = this.state.formState.slice();
      // console.log(state);
      if (
        !(
          form[currentElement.inputName] && form[currentElement.inputName].value
        )
      ) {
        state[id].errMessage = this.errorMessage[key].errMessageEmpty;
        state[id].status = '';
        // console.log(state[id].errMessage);
      } else if (
        form[currentElement.inputName] &&
        form[currentElement.inputName].value !== currentElement.trueValue
      ) {
        state[id].errMessage = this.errorMessage[key].errMessageIncorrect;
        state[id].status = '';
        // console.log(state[id].errMessage);
      } else {
        state[id].errMessage = '';
        state[id].status = 'validated';
      }
      this.setState({ formState: state });
    }
    let isValidated = this.state.formState.every((elem) => {
      return elem.status === 'validated';
    });

    this.setState({ isLogin: isValidated });
  };

  handleChangeInput = (e) => {
    let state = this.state.formState.slice();
    let id = this.errorMessage[e.target.name].id;
    let value = e.target.value;

    state[id].value = value;
    this.handleClearInput();
    this.setState({ formState: state });
  };
  handleClearInput = () => {
    let state = this.state.formState.slice();

    state.forEach((elem) => {
      elem.errMessage = '';
      elem.status = null;
    });
    this.setState({ formState: state });
  };

  getFormState = () => {
    return this.state.formState.map((item) => {
      return (
        <Input
          key={item.inputName}
          inputName={item.inputName}
          inputLabel={item.inputLabel}
          inputValue={item.value}
          errMessage={item.errMessage}
          handleChangeInput={this.handleChangeInput}
        />
      );
    });
  };

  render() {
    if (this.state.isLogin) {
      return <Profile />;
    }

    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          {this.getFormState()}
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

function Input(props) {
  return (
    <p className="field">
      <label className="field__label" htmlFor={props.inputName}>
        <span className="field-label">{props.inputLabel}</span>
      </label>
      <input
        className={'field__input field-input t-input-' + props.inputName}
        type="text"
        name={props.inputName}
        value={props.inputValue}
        onChange={props.handleChangeInput}
      />
      <span className={'field__error field-error t-error-' + props.inputName}>
        {props.errMessage}
      </span>
    </p>
  );
}

function Profile() {
  return (
    <div className="app-container">
      <img src={image} alt="bond approve" className="t-bond-image" />
    </div>
  );
}

export default Form;
