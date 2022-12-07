import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { play } from "../../features/game/game.slice";
import { incrementWin } from "../../features/score/score.slice";
import { useAppSelector } from "../../hooks";
import { Box } from "./Box"

const TableBoard = () => {
  const boxes = useAppSelector(state => state.game.boxes)
  const player = useAppSelector(state => state.game.player)
  const winner = useAppSelector(state => state.game.winner)
  const draw = useAppSelector(state => state.game.draw)
  const dispatch = useDispatch()

  const handleBoxClick = (index: number) => {
    dispatch(play({ index, player }))
  }

  useEffect(() => {
    if (winner) {
      dispatch(incrementWin(winner))
      setTimeout(() => {
        window.alert(`Player ${winner} wins`);
      }, 100)
    }
  }
  ,[winner])

  useEffect(() => {
    if (draw) {
      setTimeout(() => {
        window.alert(`Draw game`);
      }, 100);
    }
  }, [draw]);

  return (
    <div className="
      grid
      grid-cols-3
      grid-rows-3
      w-full
      h-5/6
      rounded-lg
      bg-white
      mt-4
      [&>.box:not(:nth-child(3n))]:border-r-4
      [&>.box:not(:nth-last-child(-n+3))]:border-b-4
    ">
      {
        boxes.map((value, index) => {
          return <Box value={value} key={index} onClick={() => handleBoxClick(index)} />
        })
      }
    </div>
  )
}
export { TableBoard }