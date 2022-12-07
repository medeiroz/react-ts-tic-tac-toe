import { useDispatch } from "react-redux";
import { restart } from "../../features/game/game.slice";
import { useAppSelector } from "../../hooks";

const ControlsBoard = () => {
  const player = useAppSelector(state => state.game.player)
  const dispatch = useDispatch()

  const handleRestartButton = () => {
    dispatch(restart())
  }

  return (
      <div className="flex flex-row justify-evenly bg-white px-8 py-4 rounded">
        <span className="bg-white px-4 py-2 rounded">
          Vez do Jogador {player}
        </span>

        <button
          onClick={handleRestartButton}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Reiniciar Partida
        </button>
      </div>
  );
}

export { ControlsBoard }