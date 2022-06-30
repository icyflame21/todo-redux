import { ADD_NEW_ITEM, DELETE_ITEM } from "./ActionTypes";

export const addItem = (newItem) => ({
  type: ADD_NEW_ITEM,
  payload: newItem,
});

export const deleteItem = () => ({
  type: DELETE_ITEM,
});
