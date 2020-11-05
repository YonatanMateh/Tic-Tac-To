import React, { memo } from 'react';
import styles from "./styles.module.scss";
import settings from "../../assets/settings.svg";
import star from "../../assets/star.svg";
import replay from "../../assets/replay.svg";
import cc from 'classnames';

interface IActions {
    isWinner: boolean | null,
    reset: () => void
}

export default memo((props: IActions): JSX.Element => {
    return (
        <>
            <button
                type="button"
                className={styles.reset}
                onClick={props.reset}>
                <img src={replay} alt="reset" />
            </button>
            <button
                type="button"
                className={cc(styles.rateUs, { [styles.hidden]: !props.isWinner })}>
                <span>RATE US</span>
                {[1, 2, 3, 4, 5].map((i: number) => (
                    <img key={i} src={star} alt={`star${i}`} />
                ))}
            </button>
            <button
                type="button"
                className={styles.settings}>
                <span>SETTINGS</span>
                <img src={settings} alt="settings" />
            </button>
        </>
    )
})