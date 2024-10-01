import { userDataSlice } from '@/reducers/usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const isClient = typeof window !== 'undefined';  // Check if we're on the client side

const persistConfig = {
    key: 'root',
    storage: isClient ? storage : undefined,
};

const rootReducer = combineReducers({
    userData: userDataSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,  // Disable serializable check for redux-persist
        })
});

export const persistor = isClient ? persistStore(store) : null;
export default store;