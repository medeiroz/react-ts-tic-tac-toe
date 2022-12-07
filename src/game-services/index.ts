import { PlayerModel } from '../models/Player.model';

const winnerCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],
];

const checkCombination = (combination: Array<number>, boxes: Array<PlayerModel | null>) => {
  return combination.every((index: number) => {
    const firstBoxValue = boxes[combination[0]]
    return firstBoxValue !== null && firstBoxValue === boxes[index] 
  })
}


export const gameService = {
  hasWinner(boxes: Array<PlayerModel | null>) {
    return winnerCombinations.some(combination => checkCombination(combination, boxes))
  },
  isDraw(boxes: Array<PlayerModel | null>) {
    return !this.hasWinner(boxes) && boxes.every(box => box)
  },
  getWinner(boxes: Array<PlayerModel | null>): PlayerModel|null {
    const combination = winnerCombinations.find(play => checkCombination(play, boxes)) || null
    
    return combination
      ? boxes[combination[0]]
      : null
  },
  
}