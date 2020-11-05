import React, { memo } from "react";
import styles from "./styles.module.scss";
import cc from 'classnames';

interface ISquare {
  id: number;
  player: string | null;
  squareClicked: (id: number) => void;
}

export default memo(
  (props: ISquare): JSX.Element => {
    const { id, player } = props;
    return (
      <button
        type="button"
        className={cc(
          styles.square,
          styles[`player${player}`],
          { [styles.border]: (props.id - 1) % 3 === 0 }
        )}
        onClick={() => props.squareClicked(id)}>
        {player}
      </button>
    );
  }
);
