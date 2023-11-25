import { configureStore } from "@reduxjs/toolkit";
// ...
import userReducer from "./slices/userSlice";
import announceReducer from "./slices/AnounceSlice";
import quizReducer from "./slices/QuizSlice";
export const store = configureStore({
	reducer: {
		// posts: postsReducer,
		// comments: commentsReducer,
		user: userReducer,
		announce: announceReducer,
		quiz: quizReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
