import FavoriteIcon from "../../assets/favoriteIcon.svg";
import { formatedDate } from "../../utils/FormatedPrice";

import styles from "./Card.module.scss";

export function Card(props: any) {

  function handleMarkFavorite(item:any){
    console.log('Item Favoritado',item)
  }

  return (
    <div className={styles.cardItem}>
      <img
        className={styles.thumbnail}
        src={props.item.volumeInfo.imageLinks.thumbnail}
        alt="Book"
      />
      <span className={styles.title}>{props.item.volumeInfo.title}</span>

      {props.item.volumeInfo.publishedDate && (
        <small className={styles.publishedDate}>
          <strong>Publicação:</strong>
          {formatedDate(props.item.volumeInfo.publishedDate)}
        </small>
      )}

      <div className={styles.containerBtn}>
        <button className={styles.detailItem}>Detalhes</button>

        <button className={styles.favoriteButton} onClick={() =>handleMarkFavorite(props.item)}>
          <img src={FavoriteIcon} alt="Favoritar" />
        </button>
      </div>
    </div>
  );
}
