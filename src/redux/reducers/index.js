import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
const getConfig = (key, whitelist) => {
    const persistConfig = {
        key: key,
        storage: sessionStorage,
        whitelist
    };
    return persistConfig;
};

export default combineReducers({
    app: persistReducer(getConfig('app', []), AppReducer),
});