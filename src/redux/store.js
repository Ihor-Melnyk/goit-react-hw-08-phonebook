import { configureStore } from '@reduxjs/toolkit';
import user from './auth/user';
import { userApi } from './auth/userApi';
import { contactApi } from './contacts/contactApi';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//-------- persistor user --------
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
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);

// setupListeners(store.dispatch);
