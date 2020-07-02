import React, { PureComponent } from 'react';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends PureComponent {
  state = {
    showId: '',
    data: null
  };
  componentDidUpdate() {
    const { showId } = this.props;
    if (showId !== '') {
      getShowInfo(showId).then((data) => {
        this.setState({ showId, data });
      });
    }
  }

  render() {
    const { showId, data } = this.state;
    if (showId === '') {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>;
    } else if (showId !== '' && data === null) {
      return (
        <p className="show-inforation t-show-info">
          Загрузка шоу с id {showId}
        </p>
      );
    }

    return (
      <div className="show">
        <img src={data.image.original} alt={data.name} className="show-image" />
        <h2 className="show-label t-show-name">{data.name}</h2>
        <p className="show-text t-show-genre">
          <b>Жанр:</b>
          {data.genres.join(', ')}
        </p>
        <p
          className="show-text t-show-summary"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
      </div>
    );
  }
}
export default Show;
