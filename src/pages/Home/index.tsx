import { FormEvent, useState } from "react";
import api from "../../service/api";
import ExpandIcon from "../../assets/expandIcon.svg";

import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { Search } from "../../components/Search/Search";
import { BookProps } from "../../types/IBook";

import styles from "./Home.module.scss";

export function Home() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [term, setTerm] = useState<string>("");
  const [totalItens, setTotalItens] = useState<number>(0);

  const [loading, setLoading] = useState(false);

  function handleFetchData(id: number, e: FormEvent) {
    e.preventDefault();

    if (term !== "") {
      setLoading(true);
      console.log("aqui", books);

      api
        .get(
          `volumes?q=${term}&maxResults=8&startIndex=${startIndex}&filter=ebooks`
        )
        .then((response) => {
          console.log(response.data.items);

          setBooks(
            id === 1 ? response.data.items : [...books, ...response.data.items]
          );

          setTotalItens(response.data.totalItems);
          setStartIndex(startIndex + 10);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro: " + err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className={styles.container}>
        <Search
          onSubmit={(e) => handleFetchData(1, e)}
          onChange={(e) => setTerm(e.target.value)}
        />

        {books.length > 0 && (
          <div className={styles.totalBooks}>
            Total de livros encontrados: <span>{totalItens}</span>
          </div>
        )}

        <div className={styles.containerItens}>
          {books?.map((item: any, index: any) => (
            <Card book={item} key={index} />
          ))}
        </div>

        {books.length > 0 && (
          <div className={styles.loadMore}>
            <button onClick={(e) => handleFetchData(2, e)}>
              Econtrar mais Livros
              <img src={ExpandIcon} alt="Carregar mais itens" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
