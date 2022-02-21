import styles from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={styles.container}>
      <span>Carregando ...</span>
    </div>
  );
}
