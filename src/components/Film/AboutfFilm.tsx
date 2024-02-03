import React from 'react';
import styles from './AboutfFilm.module.scss';
import { Film } from '../../types';

const AboutfFilm = (props:Film) => {
  const {genres, countries, filmLength, year} = props

  return (
    <div className={styles.wrapper}>

      <div className={styles.poster}></div>
      <div className={styles.infoFilm}>

        <div className={styles.title}>
          <h3>Догмен</h3>
          <button className={styles.buttonTitle}>Смотреть</button>
        </div>

        <div className={styles.detailFilm}>

          <div className={styles.block1}>
            <p className={styles.info}>Страна:</p>
            <p className={styles.info}>Жанр:</p>
            <p className={styles.info}>Продолжительность:</p>
            <p className={styles.info}>Премьера &#040;Мир&#041;:</p>
            <p className={styles.info}>Качество:</p>
            <p className={styles.info}>Режиссер:</p>
          </div>
          <div className={styles.block2}>
          {countries?.map((item )=> (
             <p> <span>{item.country}</span></p>)
            )}
            
            {genres?.map((item )=> (
             <p> <span>{item.genre}</span></p>)
            )}
            <p className={styles.info}> {filmLength}</p>
            <p className={styles.info}> {year}</p>
            <p className={styles.info}> качество</p>
            <p className={styles.info}> режисер</p>
          </div>
          

        </div>
      </div>

    </div>
  )
}

export default AboutfFilm
