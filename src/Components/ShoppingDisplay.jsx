import ShoppingItem from "./ShoppingItem";
import { useContext } from "react";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingDisplay = () => {
  const { shoppingLists: shoppingListContext } =
    useContext(ShoppingListContext);

  return (
    <div>
      <h3>
        Total:
        {shoppingListContext.lists[shoppingListContext.selectedList].length > 0
          ? shoppingListContext.lists[shoppingListContext.selectedList].reduce(
              (acc, cv) => {
                return acc + cv.itemAmount * cv.itemPrice;
              },
              0
            )
          : " No items added"}{" "}
        $SGD
      </h3>
      <div className="flexCenter">
        {shoppingListContext.lists[shoppingListContext.selectedList].length > 0
          ? shoppingListContext.lists[shoppingListContext.selectedList].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <ShoppingItem index={index} item={item} />
                  </div>
                );
              }
            )
          : "Add an item please"}
      </div>
    </div>
  );
};

export default ShoppingDisplay;
