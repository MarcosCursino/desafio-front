import { useContext, useState } from "react";
import Modal from "react-modal";

import FavoriteIcon from "../../assets/favoriteIcon.svg";
import { formatedDate } from "../../utils/FormatedPrice";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { BookProps } from "../../types/IBook";

import styles from "./Card.module.scss";

export function Card({ book, index, pageFavorite }: BookProps) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleAddBooks, handleDeleteBook } = useContext(FavoriteContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.overLay}
        ariaHideApp={false}
      >
        <div className={styles.containerModal}>
          <img
            className={styles.thumbnail}
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />

          <span className={styles.titleModal}>{book.volumeInfo.title}</span>

          {book.volumeInfo.authors && (
            <span className={styles.author}>
              <strong>Autor: </strong>
              {book.volumeInfo.authors[0]}
            </span>
          )}

          {book.volumeInfo.description && (
            <span className={styles.description}>
              <strong>Descrição: </strong>
              {book.volumeInfo.description}
            </span>
          )}
        </div>
      </Modal>

      <div className={styles.cardItem}>
        <img
          className={styles.thumbnail}
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="Book"
        />
        <span className={styles.title}>{book.volumeInfo.title}</span>

        {book.volumeInfo.publishedDate && (
          <small className={styles.publishedDate}>
            <strong>Publicação:</strong>
            {formatedDate(book.volumeInfo.publishedDate)}
          </small>
        )}

        <div className={styles.containerBtn}>
          <button onClick={openModal} className={styles.detailItem}>
            Detalhes
          </button>

          {pageFavorite ? (
            <div onClick={() => handleDeleteBook(index)}>Excluir </div>
          ) : (
            <button
              className={styles.favoriteButton}
              onClick={() => handleAddBooks(book)}
            >
              <img src={FavoriteIcon} alt="Favoritar" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
