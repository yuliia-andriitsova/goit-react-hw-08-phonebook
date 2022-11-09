import { combineReducers } from 'redux';
import phonebookReducer from './phonebook/phonebookSlice';
import filterReducer from './phonebook/filterSlice';

export const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});
