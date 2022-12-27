import { useAppSelector } from '../../hooks';
import { PlayerProps } from './Player.props'


const Player = (props: PlayerProps) => {
  const playerTurn = useAppSelector(state => state.game.player)

  let borderClass = 'border-gray-400';

  if (playerTurn === 'X' && props.type === 'X') {
    borderClass = 'border-green-500'
  } else if (playerTurn === 'O' && props.type === 'O') {
    borderClass = 'border-red-500'
  }

  return (
    <div className={`flex flex-col items-center justify-between rounded border ${borderClass}`}>
      <span className="w-full text-center my-2 mx-4 md:mx-6">
        Jogador
        <span className={`ml-2 font-bold ${props.type === 'X' ? 'text-green-500' : 'text-red-500'}`}>
          { props.type }
        </span>
      </span>
      <span className={`w-full text-center border-t ${borderClass}`}>
        { props.score }
      </span>
    </div>
  )
}

export { Player }