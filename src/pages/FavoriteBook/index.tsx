import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import styles from "./FavoriteBook.module.scss";
export function FavoriteBook() {
  const { books, handleDeleteBook } = useContext(FavoriteContext);

  return (
    <div className={styles.container}>
      <h2>Lista de Favoritos</h2>

      <div className={styles.containerItens}>
        {books?.map((item: any, index: any) => (
          <Card item={item} key={index} index={index} pageFavorite />
        ))}
      </div>
    </div>
  );
}
