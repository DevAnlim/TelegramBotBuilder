import { UPDATE_LIST, CHANGE_VALUE, ADD_ITEM } from '../types/bot';

export const updateList = payload => ({
  type: UPDATE_LIST,
  payload,
});

export const changeValue = payload => ({
  type: CHANGE_VALUE,
  payload,
});

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});
