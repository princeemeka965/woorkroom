import { userDataSlice } from '@/reducers/usersSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer
    },
});

export default store;