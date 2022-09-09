import { configureStore } from '@reduxjs/toolkit';
import user from './auth/user';
import { userApi } from './auth/userApi';
import contact from './contacts/contact';
import { contactApi } from './contacts/contactSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//-------- persistor user --------
const userPersistConfig = {
  key: user,
  version: 1,
  storage,
  blacklist: ['email'],
};

//-------- persistor  contact--------
const contactPersistConfig = {
  key: contact,
  version: 1,
  storage,
  // blacklist: ['email'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);
const persistedContactReducer = persistReducer(contactPersistConfig, contact);

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
    contact: persistedContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// setupListeners(store.dispatch);
