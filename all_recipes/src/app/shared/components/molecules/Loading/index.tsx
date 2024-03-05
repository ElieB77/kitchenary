import styles from "./styles.module.scss";
import { LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LinearProgress color="info" />
    </div>
  );
};

export default Loading;
