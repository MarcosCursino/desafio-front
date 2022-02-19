import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { Card } from "../../components/Card/Card";

import styles from "./FavoriteBook.module.scss";


export function FavoriteBook() {
  const { books } = useContext(FavoriteContext);

  return (
    <div className={styles.container}>
      <h2>Lista de Favoritos</h2>

      <div className={styles.containerItens}>
        {books?.map((item: any, index: any) => (
          <Card book={item} key={index} index={index} pageFavorite />
        ))}
      </div>
    </div>
  );
}
