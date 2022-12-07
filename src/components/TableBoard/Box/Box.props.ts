import { PlayerModel } from './../../../models/Player.model';
export interface BoxProps {
  key: number,
  value: PlayerModel | null,
  onClick: () => void,
}