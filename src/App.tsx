import React, { useState } from "react";
import styles from "./styles.module.scss";
import PlayersBar from "./components/PlayersBar";
import Actions from "./components/Actions";
import Board from "./components/Board";
import { players } from "./types";
import { PLAYER_X } from "./config";

function App() {
  const [moves, setMoves] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<players>(PLAYER_X);
  const [winner, setWinner] = useState<players | null>(null);

  const reset = () => {
    setMoves(Array(9).fill(null));
    setWinner(null);
  };

  const squareClicked = (player: players, playerWin: players | null = null) => {
    setCurrentPlayer(player);
    setWinner(playerWin);
  }

  return (
    <div className={styles.ticTacToe}>
      <div className={styles.container}>
        <PlayersBar currentPlayer={currentPlayer} winner={winner} />
        <Board squareClicked={squareClicked} moves={moves} />
        <Actions isWinner={!!winner} reset={reset} />
      </div>
    </div>
  )
}

export default App;
