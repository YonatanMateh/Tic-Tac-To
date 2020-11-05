import React from "react";
import cc from "classnames";
import styles from "./styles.module.scss";
import { players } from "../../types";
import batmanSVG from "../../assets/batman.svg";
import captainSVG from "../../assets/captain.svg";
import Message from "./Message";
import PlayerChar from "./PlayerChar";
import { PLAYER_O, PLAYER_X } from "../../config";

interface IPlayer {
    id: number;
    currentPlayer: players;
    winner: players | null;
}

const Player = (props: IPlayer): JSX.Element => {
    const { currentPlayer, winner, id } = props;
    const thisPlayer: players = id === 1 ? PLAYER_X : PLAYER_O;
    return (
        <div className={styles.player}>
            <PlayerChar id={id} />
            <div className={cc(styles.avatar, { [styles.avatarX]: id === 1 })}>
                <span
                    className={styles.text}>
                    Player {id}
                </span>
                <img
                    src={id === 1 ? captainSVG : batmanSVG}
                    alt="icon"
                />
            </div>
            <Message
                type="winner"
                show={winner === thisPlayer} />
            <Message
                type="nextMove"
                show={currentPlayer === thisPlayer && !winner} />
        </div>
    );
}

export default Player;