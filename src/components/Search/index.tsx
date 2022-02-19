import styles from "./Search.module.scss";
import SearchIcon from "../../assets/searchIcon.svg";

type SearchProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Search({ onChange, onSubmit }: SearchProps) {
  return (
    <form className={styles.containerSearch} onSubmit={onSubmit}>
      <input type="text" placeholder="Busque um livro" onChange={onChange} />

      <button type="submit">
        <img src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
}
