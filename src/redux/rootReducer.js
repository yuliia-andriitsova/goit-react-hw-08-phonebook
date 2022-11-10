import { combineReducers } from 'redux';
import phonebookReducer from './phonebook/phonebookSlice';
import filterReducer from './phonebook/filterSlice';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});
