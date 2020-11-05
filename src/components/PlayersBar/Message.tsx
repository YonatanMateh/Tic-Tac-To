import React from "react";
import cc from "classnames";
import styles from "./styles.module.scss";
import { msgType } from "../../types";
import crystalSVG from "../../assets/crystal.svg";
import trophySVG from "../../assets/trophy.svg";

interface IMessage {
    type: msgType;
    show: boolean;
}

const Message = (props: IMessage): JSX.Element => {
    const { type } = props;
    const isNextMove = type === "nextMove";
    const display = props.show ? styles.show : styles.hide;
    return (
        <div className={cc(styles[type], display)}>
            <span>
                {isNextMove ? "Plays Next" : "Winner!"}
            </span>
            <img
                src={isNextMove ? crystalSVG : trophySVG}
                alt="message" />
        </div>
    );
}

export default Message;