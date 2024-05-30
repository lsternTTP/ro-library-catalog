export default function Request(props) {

  function clickRemoveRequestHandler () {
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div id="request-card">
      <img src={props.book.img}></img>
      <p>{props.book.title}</p>
      <p>{props.book.author}</p>
      <button onClick={clickRemoveRequestHandler}>Remove</button>
    </div>
  );
}
