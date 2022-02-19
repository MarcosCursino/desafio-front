import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { BookProps } from '../../types/IBook'

interface FavoriteProviderProps {
  children: ReactNode;
};

interface FavoriteContextType  {
  books: any | undefined;
  handleAddBooks: (books:any) => void;
  handleDeleteBook: (index:any) => void;
}

export const FavoriteContext = createContext({} as FavoriteContextType);

export const FavoriteProvider = (props: FavoriteProviderProps) => {

  const [books, setBooks] = useState<BookProps[]>([]);

  function handleAddBooks(bookss:BookProps){
    console.log('adicionar favorito')
    setBooks([...books, bookss])
    toast.success("Livro adiconado aos favoritos!", {
      autoClose: 2200,
      hideProgressBar: true,
    });
  }


  function handleDeleteBook(index: number) {
    const bookCopy = Array.from(books);
    bookCopy.splice(index, 1);
    setBooks(bookCopy);
    toast.success("Livro retirado dos favoritos!", {
      autoClose: 2200,
      hideProgressBar: true,
    });
  }
    
  return (
    <FavoriteContext.Provider value={{books, handleAddBooks, handleDeleteBook}}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
