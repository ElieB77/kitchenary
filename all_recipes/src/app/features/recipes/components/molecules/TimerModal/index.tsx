import styles from "./styles.module.scss";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";
import { FC } from "react";
import { PLAY_ICON } from "../../../constants";

export interface TimerModalProps {
  xmarkIcon: ImageType;
  pauseIcon: ImageType;
  resetIcon: ImageType;
  hours: string;
  minutes: string;
  seconds: string;
  isTimerModalOpen: boolean;
  timerOnPause: () => void;
  timerOnReset: () => void;
  timerOnClose: () => void;
  isRunning: boolean;
  completedSteps: string;
  totalSteps: string;
  textSteps: string;
}

const TimerModal: FC<TimerModalProps> = ({
  xmarkIcon,
  pauseIcon,
  resetIcon,
  hours,
  minutes,
  seconds,
  isTimerModalOpen,
  timerOnPause,
  timerOnReset,
  timerOnClose,
  isRunning,
  completedSteps,
  totalSteps,
  textSteps,
}) => {
  const playOrPauseButton = isRunning ? pauseIcon : PLAY_ICON;

  return (
    isTimerModalOpen && (
      <div className={styles.timerModal}>
        <div className={styles.timerModal__commands}>
          <div onClick={timerOnClose}>
            <Image {...xmarkIcon} />
          </div>
          <div onClick={timerOnPause}>
            <Image {...playOrPauseButton} />
          </div>
          <div onClick={timerOnReset}>
            <Image {...resetIcon} />
          </div>
        </div>

        <div className={styles.timerModal__chrono}>
          <p>
            {hours} : {minutes} : {seconds}
          </p>
          {totalSteps && (
            <h6>
              {completedSteps} / {totalSteps} {textSteps}
            </h6>
          )}
        </div>
      </div>
    )
  );
};

export default TimerModal;
