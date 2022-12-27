import { useDispatch } from "react-redux";
import { play } from "../../features/game/game.slice";
import { useAppSelector } from "../../hooks";
import { Box } from "./Box"

const TableBoard = () => {
  const boxes = useAppSelector(state => state.game.boxes)
  const player = useAppSelector(state => state.game.player)
  const dispatch = useDispatch()

  const handleBoxClick = (index: number) => {
    dispatch(play({ index, player }))
  }

  return (
    <div className="
      grid
      grid-cols-3
      grid-rows-3
      justify-items-stretch
      w-full
      aspect-square
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