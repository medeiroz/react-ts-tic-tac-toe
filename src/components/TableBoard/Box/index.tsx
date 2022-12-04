import { BoxProps } from "./Box.props"

const Box = (props: BoxProps) => {
  return (
    <div className={`
        box
        flex
        justify-center
        items-center
        text-6xl
        border-gray-200
        font-bold
        ${props.value === 'X' ? 'text-green-500' : 'text-red-500'}
    `}>
      { props.value }
    </div>
  )
}

export { Box }