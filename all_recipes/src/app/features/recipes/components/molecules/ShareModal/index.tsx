import { FC, useState } from "react";
import styles from "./styles.module.scss";

export interface ShareModalProps {
  isShareModalOpen: boolean;
  shareButtons: any;
}

const ShareModal: FC<ShareModalProps> = ({
  isShareModalOpen,
  shareButtons,
}) => {
  return (
    isShareModalOpen && (
      <div className={styles.shareModal}>
        <div className={styles.shareModal__buttons}>{shareButtons}</div>
      </div>
    )
  );
};

export default ShareModal;
