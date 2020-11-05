import React, { memo } from "react";
import styles from "./styles.module.scss";
import { players } from "../../types";
import Player from "./Player";

interface IPlayerBar {
  currentPlayer: players;
  winner: players | null;
}

export default memo(
  (props: IPlayerBar): JSX.Element => {
    const { currentPlayer, winner } = props;
    return (
      <div className={styles.container}>
        <Player id={1} currentPlayer={currentPlayer} winner={winner} />
        <Player id={2} currentPlayer={currentPlayer} winner={winner} />
      </div>
    );
  }
);
