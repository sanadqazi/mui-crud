import { configureStore } from '@reduxjs/toolkit';
import { queriesApi } from './queries';

const store = configureStore({
    reducer: {
        [queriesApi.reducerPath]: queriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(queriesApi.middleware)
    }
});

export default store;