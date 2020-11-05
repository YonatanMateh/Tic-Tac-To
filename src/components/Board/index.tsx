import React, { memo, useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import Square from "../Square";
import { PLAYER_X, PLAYER_O } from "../../config";
import { players } from "../../types";
import cc from 'classnames';

const squares = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

const lines = [
    { row: [0, 1, 2], direction: "h1" },
    { row: [3, 4, 5], direction: "h2" },
    { row: [6, 7, 8], direction: "h3" },
    { row: [0, 3, 6], direction: "v1" },
    { row: [1, 4, 7], direction: "v2" },
    { row: [2, 5, 8], direction: "v3" },
    { row: [0, 4, 8], direction: "dm" },
    { row: [2, 4, 6], direction: "dc" },
];

interface IBoard {
    moves: Array<players | null>,
    squareClicked: (player: players, playerWin: players | null) => void
}

export default memo((props: IBoard): JSX.Element => {
    const [moves, setMoves] = useState<Array<players | null>>(props.moves);
    const [currentPlayer, setCurrentPlayer] = useState<players>(PLAYER_X);
    const [winner, setWinner] = useState<players | null>(null);
    const [winDirection, setWinDirection] = useState("");

    const checkWinner = (): players | null => {
        const winMove = lines.find(({ row: [a, b, c] }) =>
            (moves[a] &&
                moves[a] === moves[b] &&
                moves[a] === moves[c])
        )

        if (winMove) {
            setWinDirection(winMove.direction);
            return moves[winMove.row[0]]
        } else {
            return null
        }
    }


    const squareClicked = (i: number) => {
        if (!moves[i] && !winner) {
            setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
            const temp = [...moves];
            temp[i] = currentPlayer;
            setMoves(temp);
        }
    }

    const generateBoard = (): JSX.Element[] => {
        return squares.map((row: any[], i: number) =>
            (<div
                className={cc(styles.row,
                    { [styles.borderBottom]: i === 0 || i === 1 })}
                key={i * 9}>
                {row.map((id: number) => (
                    <Square
                        key={id}
                        player={moves[id]}
                        id={id}
                        squareClicked={squareClicked}
                    />
                ))}
            </div>)
        )
    }

    useEffect(() => {
        // when reset
        setMoves(props.moves);
        setWinDirection("");
        setWinner(null);
        setCurrentPlayer(PLAYER_X);
    }, [props.moves])

    useEffect(() => {
        const win = checkWinner();
        if (win) {
            setWinner(win);
        }
        props.squareClicked(currentPlayer, win);
    }, [currentPlayer])

    return (
        <div className={cc(styles.Board, styles[winDirection])}>
            {generateBoard()}
        </div>
    )
})