import "./App.css";
import ShoppingPage from "./Components/ShoppingPage";
import ShoppingListProvider from "./Provider/ShoppingListProvider";

function App() {
  return (
    <div>
      <ShoppingListProvider>
        <ShoppingPage />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
