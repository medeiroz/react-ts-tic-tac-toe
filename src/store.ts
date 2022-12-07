import { scoreReducer } from './features/score/score.slice';
import { gameReducer } from './features/game/game.slice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    score: scoreReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch