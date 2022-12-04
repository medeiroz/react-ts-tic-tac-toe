import { Player } from "../Player.tsx"

const ScoreBoard = () => {
  return (
    <div className="flex w-100 justify-evenly text-xl bg-white px-8 py-4 rounded">
      <Player type="X" score={0}/>
      <Player type="O" score={0}/>
    </div>
  )
}

export { ScoreBoard }