import React from "react";
import styles from "./styles.module.scss";
import { PLAYER_O, PLAYER_X } from "../../config";

interface ID {
    id: number;
}

const PlayerChar = (props: ID): JSX.Element => {
    const { id } = props;
    return (
        <span className={id === 1 ? styles.playerCharX : styles.playerCharO}>
            {id === 1 ? PLAYER_X : PLAYER_O}
        </span>
    );
}

export default PlayerChar;