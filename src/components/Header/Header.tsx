import Logo from "../../assets/logo.png";
import FavoriteIcon from "../../assets/favoriteIcon.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
export function Header() {

 

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>

          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          
            <button type="button" className={styles.button}>
          <Link to="/favoritos">
              <span>Favoritos</span>
          </Link>
              <img src={FavoriteIcon} alt="Favoritos" />
            </button>
          
        </div>
      </header>
    </>
  );
}
