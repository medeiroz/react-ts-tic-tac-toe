import { Box } from "./Box"

const TableBoard = () => {
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
      <Box value="X" />
      <Box value="O" />
      <Box value="X" />
      <Box value="O" />
      <Box value="X" />
      <Box value="X" />
      <Box value="X" />
      <Box value="O" />
      <Box value="O" />

    </div>
  )
}
export { TableBoard }