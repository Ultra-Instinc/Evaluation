import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
interface UserState {
	value: boolean;
	modal: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
	value: false,
	modal: false,
};

export const userSlice = createSlice({
	name: "user",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		toggleUser: (state) => {
			state.value = !state.value;
		},
		toggleQuizModal: (state) => {
			state.modal = !state.modal;
		},
	},
});

export const { toggleUser, toggleQuizModal } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
