import { useDispatch } from "react-redux";
import { restart } from "../../features/game/game.slice";
import { useAppSelector } from "../../hooks";
import { HiArrowPath } from 'react-icons/hi2'

const ControlsBoard = () => {
  const player = useAppSelector(state => state.game.player)
  const winner = useAppSelector(state => state.game.winner)
  const dispatch = useDispatch()

  const handleRestartButton = () => {
    dispatch(restart())
  }

  const playerTurnLabel = (
    <span className="bg-white px-4 py-2 rounded">
      Turn <span className="text-xl font-bold">{player}</span>
    </span>
  )

  const winnerLabel = (
    <span className="bg-white px-4 py-2 rounded">
      <span className="text-xl font-bold">{winner}</span> is Winner
    </span>
  );


  return (
    <div className="flex flex-row justify-evenly bg-white px-8 py-4 rounded">
      {winner && winnerLabel}
      {!winner && playerTurnLabel}

      <button
        onClick={handleRestartButton}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        <HiArrowPath />
      </button>
    </div>
  );
}

export { ControlsBoard }