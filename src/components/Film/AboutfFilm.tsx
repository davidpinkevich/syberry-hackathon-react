import React from 'react';
import styles from './AboutfFilm.module.scss';


const AboutfFilm = () => {
 

  return (
    <div className={styles.wrapper}>

      <div className={styles.poster}></div>
      <div className={styles.infoFilm}>

        <div className={styles.title}>
          <h1>Догмен</h1>
          <button>Смотреть</button>
        </div>

        <div className={styles.detailFilm}>
          <p className={styles.info}>Страна: <span>Франция</span></p>

        </div>
      </div>

    </div>
  )
}

export default AboutfFilm
