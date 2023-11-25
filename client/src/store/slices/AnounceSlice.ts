import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AnnounceState {
	_id?: string;
	title: string;
	profession: string;
	avatar: string;
	message: string;
}

// Define the initial state using that type
const initialState: { announces: AnnounceState[] } = {
	announces: [],
};

export const announceSlice = createSlice({
	name: "announce",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		populateAnnounceState: (state, action) => {
			if (state.announces.length > 0) {
				state.announces = new Array();
			}
			state.announces.push(...action.payload);
		},
		handleTheAnnounceDeletion: (state, action) => {
			state.announces = state.announces.filter(
				(announcement) => announcement._id !== action.payload
			);
		},
	},
});

export const { populateAnnounceState, handleTheAnnounceDeletion } =
	announceSlice.actions;

export default announceSlice.reducer;
