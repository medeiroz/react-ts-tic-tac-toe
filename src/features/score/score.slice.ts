import { PlayerModel } from './../../models/Player.model';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ScoreState {
  players: Array<{ name: PlayerModel, points: number }>
}

const initialState: ScoreState = {
  players: [
    {
      name: 'X',
      points: 0,
    },
    {
      name: 'O',
      points: 0,
    }
  ],
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementWin: (state, action: PayloadAction<PlayerModel>) => {
      console.log('action.payload', action.payload)
      const player = state.players.find(player => player.name === action.payload) || null
    
      if (player) {
        player.points += 1
      }
    },
  },
})

export const { incrementWin } = scoreSlice.actions
export const scoreReducer = scoreSlice.reducer