import { useEffect, useState } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingDisplay from "./ShoppingDisplay";

const ShoppingPage = () => {
  const [lists, setLists] = useState({
    sampleList: [{ item: "test 1", itemAmount: 5, itemPrice: 5 }],
  });
  const [listSelected, setListSelected] = useState(lists.sampleList);
  const [currentListName, setCurrentListName] = useState("sampleList");
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newListForm, setNewListForm] = useState("");

  const selectList = (list) => {
    setListSelected(lists[list]);
    setCurrentListName(`${list}`);
  };

  const newList = () => {
    setLists((prevState) => {
      return { ...prevState, [newListForm]: [] };
    });
    setShowNewListForm(!showNewListForm);
    setNewListForm("");
  };

  const addItem = (item) => {
    setListSelected((prevState) => {
      return [item, ...prevState];
    });
  };

  useEffect(() => {
    setLists((prevState) => {
      return { ...prevState, [currentListName]: listSelected };
    });
  }, [listSelected, currentListName]);

  const deleteItem = (index) => {
    const alteredArray = [...listSelected];
    alteredArray.splice(index, 1);
    setListSelected(alteredArray);
  };

  const markAsBought = (index) => {
    const alteredArray = [...listSelected];
    alteredArray[index] = {
      ...alteredArray[index],
      markAsBought: !alteredArray[index].markAsBought,
    };
    setListSelected(alteredArray);
  };

  console.log(Object.entries(lists));

  const displayLists = () => {
    let display = [];
    for (const [key, value] of Object.entries(lists)) {
      display.push(
        <div onClick={() => selectList(key)} className="item">
          <h3>{key}</h3>
          <p>Number of Items: {value.length}</p>
        </div>
      );
    }
    return display;
  };

  return (
    <>
      {showNewListForm ? (
        <div className="form">
          <input
            type="text"
            name="newListForm"
            value={newListForm}
            placeholder="New List"
            onChange={(e) => setNewListForm(e.target.value)}
          />
          <button onClick={newList}>Add List</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowNewListForm(!showNewListForm)}>
            New List
          </button>
          <div className="flexCenter">{displayLists()}</div>
          <ShoppingForm addItem={addItem} />
          <h2>{currentListName}</h2>

          <ShoppingDisplay
            list={listSelected}
            deleteItem={deleteItem}
            markAsBought={markAsBought}
          />
        </div>
      )}
    </>
  );
};

export default ShoppingPage;
