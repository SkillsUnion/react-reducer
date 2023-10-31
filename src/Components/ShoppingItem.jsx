import bin from "/images/bin.png";
import bought from "/images/bought.png";
import notBought from "/images/notbought.png";
import { useContext } from "react";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingItem = (props) => {
  const {
    shoppingListsDispatch: dispatch,
    shoppingLists: shoppingListContext,
  } = useContext(ShoppingListContext);

  const deleteItem = (index) => {
    dispatch({
      type: "DELETE",
      payload: {
        selectedList: shoppingListContext.selectedList,
        index: index,
      },
    });
  };

  const markAsBought = (index) => {
    dispatch({
      type: "MARK",
      payload: {
        selectedList: shoppingListContext.selectedList,
        index: index,
      },
    });
  };

  return (
    <div
      className={`item ` + (props.item.markAsBought ? "bought" : "notBought")}
    >
      <h3>Item: {props.item.item} </h3>
      <p>
        Amount: {props.item.itemAmount} - Price: $SGD {props.item.itemPrice}
      </p>
      <button onClick={() => markAsBought(props.index)}>
        {props.item.markAsBought ? (
          <img className="icon" src={notBought} alt="Mark as bought" />
        ) : (
          <img className="icon" src={bought} alt="Mark as not bought" />
        )}
      </button>
      <button onClick={() => deleteItem(props.index)}>
        <img className="icon" src={bin} alt="Delete Item" />
      </button>
    </div>
  );
};

export default ShoppingItem;
