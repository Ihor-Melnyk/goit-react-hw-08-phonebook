import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from './auth/userApi';

import user from './auth/user';
import { contactApi } from './contacts/contactApi';

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

//-------- persistor --------
const userPersistConfig = {
  key: user,
  version: 1,
  storage,
  blacklist: ['email'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
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
