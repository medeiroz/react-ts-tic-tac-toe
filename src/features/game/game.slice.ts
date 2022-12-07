import { PlayerModel } from './../../models/Player.model';
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { gameService } from '../../game-services';
import { incrementWin } from '../score/score.slice';

export interface GameState {
  boxes: Array<PlayerModel | null>,
  player: PlayerModel,
  winner: PlayerModel | null,
}

export interface PlayPayloadAction {
  index: number,
  player: PlayerModel,
}

const initialState: GameState = {
  boxes: Array(9).fill(null),
  player: 'X',
  winner: null,
}


export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    play(state, action: PayloadAction<PlayPayloadAction>) {
      if (
        state.boxes[action.payload.index] !== null
        || gameService.hasWinner(state.boxes)
        || gameService.isDraw(state.boxes)
      ) {
        return
      }
      
      state.boxes[action.payload.index] = action.payload.player
      state.winner = gameService.getWinner(state.boxes)

      if (state.winner === null) {
        state.player = state.player !== 'X' ? 'X' : 'O'
      }
    },
    restart() {
      return initialState
    }
  },
})

export const { play, restart } = gameSlice.actions
export const gameReducer = gameSlice.reducer