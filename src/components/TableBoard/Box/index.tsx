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
        text-8xl
        border-gray-200
        font-bold
        aspect-square
        max-h-40
        hover:bg-gray-100
        ${props.value ? 'animate-growth': ''} 
        ${textClass}
        ${props.value ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      { props.value }
    </div>
  )
}

export { Box }