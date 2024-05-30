import "./RequestList.css";
import Request from "./Request.jsx";


export default function RequestList(props) {
  function liftRequestToRemoveHandler(bookToRemove) {
    props.removeFromRequestListHandler(bookToRemove);
  }

  return (
    <section id="requests-list">
      <input
        type="text"
        placeholder="Don't click me; I don't work"
        id="search-bar"
      ></input>
      <button type="submit" id="search-button">
        Submit
      </button>
      <h2>Requested Books</h2>
      {props.requestList.map((requestedBook) => (
        <Request
          liftRequestToRemoveHandler={liftRequestToRemoveHandler}
          book={requestedBook}
          key={requestedBook.id}
        ></Request>
      ))}
    </section>
  );
}
