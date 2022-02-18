import styles from "./Search.module.scss";
import SearchIcon from "../../assets/searchIcon.svg";

type SearchProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Search({ onChange, onClick }: SearchProps) {
  return (
    <div className={styles.containerSearch}>
      <input type="text" placeholder="Busque um livro" onChange={onChange} />

      <button onClick={onClick}>
        <img src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
}
