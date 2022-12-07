import { BoxProps } from "./Box.props"

const Box = (props: BoxProps) => {

  let textClass = '';
  
  if (props.value === 'X') {
    textClass = 'text-green-500'
  } else if (props.value === 'O') {
    textClass = 'text-red-500'
  }

  return (
    <div
      onClick={props.onClick}
      className={`
        box
        flex
        justify-center
        items-center
        text-6xl
        border-gray-200
        font-bold
        ${textClass}
        ${props.value ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      { props.value }
    </div>
  )
}

export { Box }