import { ControlsBoard } from "../ControlsBoard"
import { ScoreBoard } from "../ScoreBoard"
import { TableBoard } from "../TableBoard"
import { incrementWin } from "../../features/score/score.slice";
import { useAppSelector } from "../../hooks";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "flowbite-react";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi2";
import { restart } from "../../features/game/game.slice";

const GameBoard = () => {
  const dispatch = useDispatch()
  const winner = useAppSelector(state => state.game.winner)
  const draw = useAppSelector(state => state.game.draw)
  
  const [ modalText, setModalText ] = useState<String | null>(null);
  const modalShow = modalText !== null

  useEffect(() => {
    if (winner) {
      dispatch(incrementWin(winner))
      setModalText(`Player ${winner} wins`);
    }
  }
  ,[winner])

  useEffect(() => {
    if (draw) {
      setModalText('Draw game');
    }
  }, [draw]);

  const restartGame = () => {
    setModalText(null)
    dispatch(restart())
  }

  return (
    <React.Fragment>

      <Modal
        show={modalShow}
        size="md"
        popup={true}
        onClose={ restartGame }
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            { draw && <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" /> }
            { winner && <HiOutlineCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-400" /> }
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              { modalText }
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="success"
                onClick={ restartGame }
              >
                Restart Game
              </Button>
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <div className="flex flex-col justify-between h-full md:h-2/3 w-full md:w-1/2 p-6 md:p-0">
        <ControlsBoard />
        <ScoreBoard />
        <TableBoard />
      </div>
    </React.Fragment>
  )
}

export { GameBoard }