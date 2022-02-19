import { useContext, useState } from "react";
import FavoriteIcon from "../../assets/favoriteIcon.svg";
import { formatedDate } from "../../utils/FormatedPrice";
import Modal from "react-modal";

import { FavoriteContext } from "../../contexts/FavoriteContext";

import styles from "./Card.module.scss";

export function Card(props: any) {
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
            src={props.item.volumeInfo.imageLinks.thumbnail}
            alt="Book"
          />

          <span className={styles.titleModal}>
            {props.item.volumeInfo.title}
          </span>

          {props.item.volumeInfo.authors && (
            <span className={styles.author}>
              <strong>Autor: </strong>
              {props.item.volumeInfo.authors[0]}
            </span>
          )}

          {props.item.volumeInfo.description && (
            <span className={styles.description}>
              <strong>Descrição: </strong>
              {props.item.volumeInfo.description}
            </span>
          )}
        </div>
      </Modal>

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
          <button onClick={openModal} className={styles.detailItem}>
            Detalhes
          </button>

          {props.pageFavorite ? (
            <div onClick={() => handleDeleteBook(props.index)}>Excluir </div>
          ) : (
            <button
              className={styles.favoriteButton}
              onClick={() => handleAddBooks(props.item)}
            >
              <img src={FavoriteIcon} alt="Favoritar" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
