import { configureStore } from '@reduxjs/toolkit'
import deleteSlice from '../reducers/deleteSlice'
import fetchSlice from '../reducers/fetchSlice'
import postSlice from '../reducers/postSlice'

export const store = configureStore({
  reducer: {
    fetch: fetchSlice.reducer,
    post: postSlice.reducer,
    delete: deleteSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
