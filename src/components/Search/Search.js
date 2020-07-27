// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions';
import { getIsLoading, getError, getSeries } from '../../reducers/search';
import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import classNames from 'classnames';

class Search extends PureComponent {
  state = {
    inputValue: ''
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleOnClick = () => {
    const { searchRequest } = this.props;
    const { inputValue } = this.state;

    searchRequest(inputValue);
  };

  render() {
    const { isLoading, error, series } = this.props;
    const { inputValue } = this.state;

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла ошибка</p>;

    return (
      <React.Fragment>
        <div className={styles.previewLis}>
          <input
            className={classNames(styles.input, 't-input')}
            placeholder="Название сериала"
            onChange={this.handleInputChange}
            value={inputValue}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={classNames(styles.button, 't-search-button')}
              onClick={this.handleOnClick}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={styles.searchPanel + ' t-search-result'}>
          {/* {console.log(series)} */}
          {series &&
            series.map(episode => (
              <ShowPreview key={episode.id} {...episode} />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  series: getSeries(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});
const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
