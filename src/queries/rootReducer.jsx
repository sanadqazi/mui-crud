import { combineReducers } from 'redux';
import authReducer from './authSlice';
import { queriesApi } from './queries';

const rootReducer = combineReducers({
    auth: authReducer,
    [queriesApi.reducerPath]: queriesApi.reducer
});

export default rootReducer;