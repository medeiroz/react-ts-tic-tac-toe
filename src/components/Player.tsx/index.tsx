import { PlayerProps } from './Player.props'


const Player = (props: PlayerProps) => {
  return (
    <div className="flex flex-col items-center justify-between rounded border border-gray-400">
      <span className="w-full text-center my-2 mx-8">
        Jogador
        <span className={`ml-2 font-bold ${props.type === 'X' ? 'text-green-500' : 'text-red-500'}`}>
          { props.type }
        </span>
      </span>
      <span className='w-full text-center border-t border-gray-400'>
        { props.score }
      </span>
    </div>
  )
}

export { Player }