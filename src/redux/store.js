import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';

import { rootReducer } from './rootReducer';
// import phonebookReducer from './phonebook/phonebookSlice';
// import filterReducer from './phonebook/filterSlice';
// import authReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: rootReducer,
  // auth: persistReducer(authPersistConfig, authReducer),
  // contacts: phonebookReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
