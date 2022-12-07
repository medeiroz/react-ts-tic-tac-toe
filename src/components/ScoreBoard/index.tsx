import { useAppSelector } from "../../hooks"
import { Player } from "../Player"

const ScoreBoard = () => {

  const players = useAppSelector(state => state.score.players)

  return (
    <div className="flex w-100 justify-evenly text-xl bg-white px-8 py-4 rounded mt-4">
      <Player type="X" score={players[0].points} />
      <Player type="O" score={players[1].points} />
    </div>
  )
}

export { ScoreBoard }