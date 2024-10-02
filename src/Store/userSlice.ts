import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User } from '../interfaces';

type UsersState = {
	activeUsers: User[];
	archiveUsers: User[];
	loading:boolean,
	error: string | null,
	popupSuccesIsActive:boolean,
}

const initialState: UsersState = {
	activeUsers:[],
	archiveUsers:[],
	loading:false,
	error: null,
	popupSuccesIsActive:false,
}

export const fetchUsers = createAsyncThunk<User[], void, {rejectValue:string}>(
	'users/fetchUsers',
	async function(_, {rejectWithValue}){
		const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6');

		if(!response.ok){
			return rejectWithValue('Server Error!');
		}

		const data = await response.json();
		return data
	}
);

export const fetchUserById = createAsyncThunk<User, number, {rejectValue:string}>(
	'users/fetchUsers',
	async function(id:number, {rejectWithValue}){
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

		if(!response.ok){
			return rejectWithValue('Server Error!');
		}

		const data = await response.json();
		return data
	}
);
  
const userSlice = createSlice({
	name:'users',
	initialState,
	reducers:{
		arhiveUserCard(state, action:PayloadAction<number>){
			const arhivedUser = state.activeUsers.find(user => user.id === action.payload);
			state.activeUsers = state.activeUsers.filter(user => user.id !== action.payload);
			if(arhivedUser){
				arhivedUser.isActive=false;
				state.archiveUsers.push(arhivedUser);
			}
		},
		activeUserCard(state, action:PayloadAction<number>){
			const unarhivedUser = state.archiveUsers.find(user => user.id === action.payload);
			state.archiveUsers = state.archiveUsers.filter(user => user.id !== action.payload);
			if(unarhivedUser){
				unarhivedUser.isActive=true
				state.activeUsers.push(unarhivedUser)
			}
		},
		editUserCard(state, action:PayloadAction<User>){
			const editedUser = state.activeUsers.find(user=>user.id = action.payload.id)
			if(editedUser){
				editedUser.address.city = action.payload.address.city;
				editedUser.email = action.payload.email;
				editedUser.name = action.payload.name;
				editedUser.company.name = action.payload.company.name;
				editedUser.phone = action.payload.phone;
				editedUser.username = action.payload.username;
				state.popupSuccesIsActive = true;
				
			}
		},
		deleteUserCard(state, action:PayloadAction<number>){
			state.activeUsers = state.activeUsers.filter(user => user.id !== action.payload);
		},
		hidePopupSucces(state){
			state.popupSuccesIsActive=false
		}
	},
	extraReducers:(builder)=>{
		builder
			.addCase(fetchUsers.pending, (state)=>{
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled,(state, action)=>{
				state.activeUsers = action.payload;
				state.activeUsers.forEach((el)=>el.isActive=true)
				state.archiveUsers = [];
				state.loading = false;
			})
	}
});

export const {
	arhiveUserCard, 
	activeUserCard, 
	editUserCard, 
	deleteUserCard, 
	hidePopupSucces} = userSlice.actions;

export default userSlice.reducer