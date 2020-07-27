// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';
import { getResults, getIsLoading, getError } from '../../reducers/shows';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showRequest } = this.props;
    const { id } = this.props.match.params;

    showRequest(id);
  }
  getPerson(array) {
    return array.map(element => {
      return (
        <div className="t-person" key={element.person.id}>
          <p>{element.person.name}</p>
          <img src={element.person.image.medium} alt={element.person.name} />
        </div>
      );
    });
  }
  render() {
    const { isLoading, error, results } = this.props;
    console.log(results);
    console.log(results._embedded);

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла ошибка</p>;

    return (
      <React.Fragment>
        <div>
          <p>{results.name}</p>
          {results.image && (
            <img src={results.image.medium} alt={results.name} />
          )}
        </div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: results.summary }} />
        </div>
        <div className={styles.cast}>
          {results._embedded ? this.getPerson(results._embedded.cast) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  results: getResults(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});
const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
