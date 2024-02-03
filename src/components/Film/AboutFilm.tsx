import styles from "./AboutfFilm.module.scss";
import { Film } from "../../types";
import ButtonPlay from "../ButtonPlay/ButtonPlay";


import { useAppDispatch } from '../../hooks';
import { addToFavorites, removeFromFavorites } from '../../redux/slices/sliceFavorites';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";


const AboutFilm = (props: Film) => {

  const dispatch = useAppDispatch();

  const { genres, countries, duration, year, premiereRu } = props;

  function addFavorites(props: Film) {
    dispatch(addToFavorites(props) )
  }
  function removeFavorites(id:number) {
    dispatch(removeFromFavorites(id) )
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <img src={props.posterUrlPreview} />
      </div>
      <div className={styles.infoFilm}>
        <div className={styles.title}>
          <h3>{props.nameRu}</h3>
        </div>
        <div className={styles.detailFilm}>
          <ButtonPlay />
          <div className={styles.info}>
            {<span>Страна:</span>}
            <div className={styles.block}>
              {countries?.map((item, i) => (
                <div key={i}>
                  <p>{item.country}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.info}>
            {<span>Жанр:</span>}
            <div className={styles.block}>
              {genres?.map((item, i) => (
                <div key={i}>
                  <p>{item.genre} </p>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.info}>
            {<span>Продолжительность:</span>} {duration}
          </p>
          <p className={styles.info}>
            {<span>Год:</span>} {year} г.
          </p>
          <p className={styles.info}>
            {<span>Премьера:</span>} {premiereRu}
          </p>
          <div style={{display: "flex"}}>
            <AiOutlineLike size={40} onClick={()=> addFavorites(props)} /> 
            <AiOutlineDislike size={40} onClick={()=> removeFavorites(props.kinopoiskId)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
