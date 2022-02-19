import { createContext, ReactNode, useState } from "react";
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

  function handleAddBooks(bookss:any){
    console.log('adicionar favorito')
    setBooks([...books, bookss])
  }


  function handleDeleteBook(index: any) {
    const bookCopy = Array.from(books);
    bookCopy.splice(index, 1);
    setBooks(bookCopy);
  }
    
  return (
    <FavoriteContext.Provider value={{books, handleAddBooks, handleDeleteBook}}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
