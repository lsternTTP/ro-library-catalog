import "./App.css";
import AllBooks from "./COMPONENTS/BookCatalog/AllBooks.jsx";
import RequestList from "./COMPONENTS/Requests/RequestList.jsx";
import database from "../BookData.json";
import { useState } from "react";

//NOTE: Put Object ABOVE the function that calls it

export default function App() {
  const [myRequests, setMyRequests] = useState([]);
  const [bookCatalog, updatedBookCatalog] = useState(database.catalog);

  // Function to add Requests [Done]
  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      let myNewRequests = [...myRequests, bookToAdd];
      return myNewRequests;
    });
  }

  // Function to remove Requests [Done]
  function removeFromRequestListHandler(bookToRemove) {
    setMyRequests(() => {
      return myRequests.filter(
        (thisRequest) => thisRequest.id != bookToRemove.id,
      );
    });
  }

  // Basic page layout
  return (
    <main>
      <h1>Coolsville Public Library Catalog</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Account</li>
          <li>Contact</li>
        </ul>
        <marquee>Check out our new classes and workshops on our Events page!</marquee>
      </nav>

      <section id="the-whole-enchilada">
        <AllBooks
          bookList={database.catalog}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>

        <RequestList
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></RequestList>
      </section>
    </main>
  );
}
