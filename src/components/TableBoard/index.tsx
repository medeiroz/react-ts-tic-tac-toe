import { Box } from "./Box"

const TableBoard = () => {

  const boxes = Array(9).fill(null);

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
          return <Box value={value} id={index} />
        })
      }
    </div>
  )
}
export { TableBoard }