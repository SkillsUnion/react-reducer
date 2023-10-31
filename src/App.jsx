import "./App.css";
import ShoppingPage from "./Components/ShoppingPage";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <ShoppingPage lists={lists} setLists={setLists} />
      </header>
    </div>
  );
}

export default App;
