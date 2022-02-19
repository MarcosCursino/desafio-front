export interface IBookProps {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface BookProps {
  book: IBookProps;
  index?: number;
  pageFavorite?: boolean;
}