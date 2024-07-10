function ListGroup() {
  const items = ["Harare", "Bulawayo", "Victoria Falls", "Gweru", "Mutare"];


  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
