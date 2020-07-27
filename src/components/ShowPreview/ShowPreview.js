// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import styles from './ShowPreview.module.css';

const ShowPreview = props => {
  const { id, name, image, summary } = props;

  return (
    <div className={styles.container + ' t-preview'}>
      <div>
        <a className="t-link" href={`/shows/${id}`}>
          {name}
        </a>
        {image && <img src={image.medium} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default ShowPreview;
