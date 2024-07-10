import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Harare", "Bulawayo", "Victoria Falls", "Gweru", "Mutare"];

  const handleSelectItem = (item :string)=>{
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}
export default App;
