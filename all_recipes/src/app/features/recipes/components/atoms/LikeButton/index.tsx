import Image from "next/image";
import { HEART_ICON } from "../../../constants";
import styles from "./styles.module.scss";

const LikeButton = () => {
  return (
    <button className={styles.likeButton}>
      <Image {...HEART_ICON} />
    </button>
  );
};

export default LikeButton;
