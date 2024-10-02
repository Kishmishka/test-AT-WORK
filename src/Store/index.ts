import {configureStore} from '@reduxjs/toolkit';
import userReduser from './userSlice'

const store = configureStore({
	reducer:{
		users:userReduser,
	}
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;