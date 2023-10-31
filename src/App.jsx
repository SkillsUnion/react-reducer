import "./App.css";
import ShoppingPage from "./Components/ShoppingPage";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([]);

  return (
    <div>
      <ShoppingPage lists={lists} setLists={setLists} />
    </div>
  );
}

export default App;
