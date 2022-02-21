import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "./Card";

const book = {
  kind: "books#volume",
  id: "NWwmAAAAMAAJ",
  etag: "qDrxc7NIAQ0",
  selfLink: "https://www.googleapis.com/books/v1/volumes/NWwmAAAAMAAJ",
  volumeInfo: {
    title: "Clinical Laboratory Improvement Act of 1976",
    authors: ["Anasse Bari", "Mohamed Chaouchi", "Tommy Jung"],
    publishedDate: "2012-04-24",
    description:
      "if you want to learn how to build efficient React applications, this is your book.",
    readingModes: { text: false, image: true },
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=qoyUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
  },
};

describe("Card component", () => {
  it("should be able to render card component", () => {
    const cards = render(<Card book={book} />);
    expect(cards).toBeTruthy();
  });

  it("should be able to open the details", () => {
    const { getByText } = render(<Card book={book} />);
    const detailButton = getByText("Detalhes");

    userEvent.click(detailButton);
  });
});
