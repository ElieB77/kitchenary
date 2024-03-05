import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";

export interface PaginationButtonProps {
  content: number;
  onClick: (event: any) => void;
  active?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  content,
  onClick,
  active,
}) => {
  return (
    <button
      className={`${styles.paginationButton} ${ebGaramond.className} ${
        active ? styles.active : ""
      } `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default PaginationButton;
