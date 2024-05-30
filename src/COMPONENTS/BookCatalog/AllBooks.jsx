import "./AllBooks.css";
import Book from "./Book.jsx";

export default function AllBooks(props) {
  
  function liftBookToAppHandler(bookToAdd) {
    props.addToRequestListHandler(bookToAdd);
  }

  return (
    <section id="books-list">
      {props.bookList.map((thisBook) => (
        <Book
          liftBookToAppHandler={liftBookToAppHandler}
          book={thisBook}
          key={thisBook.id}
        ></Book>
      ))}
    </section>
  );
}
