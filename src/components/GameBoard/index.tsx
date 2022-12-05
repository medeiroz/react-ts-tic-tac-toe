import { ControlsBoard } from "../ControlsBoard"
import { ScoreBoard } from "../ScoreBoard"
import { TableBoard } from "../TableBoard"

const GameBoard = () => {
  return (
    <div className="flex flex-col justify-between h-2/3 w-1/2">
      <ControlsBoard />
      <ScoreBoard />
      <TableBoard />
    </div>
  )
}

export { GameBoard }