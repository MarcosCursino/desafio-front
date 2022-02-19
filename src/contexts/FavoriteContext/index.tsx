import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  books: any | undefined;
  handleAddBooks: (books:any) => void;
  handleDeleteBook: (index:any) => void;
}

export const FavoriteContext = createContext({} as AuthContextType);

export const FavoriteProvider = (props: AuthContextProviderProps) => {

  const [books, setBooks] = useState<any[]>([]);

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
