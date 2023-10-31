import React, { useReducer } from "react";
import { shoppingListReducer, initialState } from "../Reducer/ShoppingLists";

export const ShoppingListContext = React.createContext();
const ShoppingListProvider = ({ children }) => {
  const [shoppingLists, shoppingListsDispatch] = useReducer(
    shoppingListReducer,
    initialState
  );

  return (
    <ShoppingListContext.Provider
      value={{ shoppingListsDispatch, shoppingLists }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;
