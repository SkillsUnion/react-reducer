import { ADD, MARK, DELETE, NEW, SELECT } from "./ShoppingItemActionTypes";

export const initialState = {
  lists: {
    sampleList: [
      { item: "test 1", itemAmount: 5, itemPrice: 5, markAsBought: false },
      { item: "test 2", itemAmount: 10, itemPrice: 2, markAsBought: false },
    ],
  },
  selectedList: "sampleList",
};

export function shoppingListReducer(state, action) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selectedList: action.payload.selectedList,
      };
    case NEW:
      return {
        ...state,
        lists: { ...state.lists, [action.payload.name]: [] },
      };
    case ADD:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: [
            action.payload.item,
            ...state.lists[`${action.payload.selectedList}`],
          ],
        },
      };
    case MARK: {
      const updatedItem = {
        ...state.lists[action.payload.selectedList][action.payload.index],
      };
      updatedItem.markAsBought =
        !state.lists[action.payload.selectedList][action.payload.index]
          .markAsBought;
      const updatedList = [...state.lists[action.payload.selectedList]];
      updatedList[action.payload.index] = updatedItem;

      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: [...updatedList],
        },
      };
    }
    case DELETE: {
      const alteredArray = state.lists[action.payload.selectedList];
      alteredArray.splice(action.payload.index, 1);
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: alteredArray,
        },
      };
    }
    default:
      return state;
  }
}
