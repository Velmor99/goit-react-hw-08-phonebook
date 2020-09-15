import contactsReducer from './contacts/contactsReducers';
import authReducers from './auth/authReducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//const defaultMiddleWare = getDefaultMiddleware()


const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}




const store = configureStore({
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	reducer: {
		contacts: contactsReducer,
		auth:persistReducer(authPersistConfig, authReducers),
	}
});


export const persistor = persistStore(store);
export default store