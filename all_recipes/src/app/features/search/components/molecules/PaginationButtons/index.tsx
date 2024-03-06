import { FC } from "react";
import PaginationButton, {
  PaginationButtonProps,
} from "../../atoms/PaginationButton";
import styles from "./styles.module.scss";

export interface PaginationButtonsProps extends PaginationButtonProps {
  totalPages: number;
  currentPage: number;
}

const PaginationButtons: FC<PaginationButtonsProps> = ({
  totalPages,
  currentPage,
  onClick,
}) => {
  return (
    <div className={styles.paginationButtons}>
      {Array.from({ length: totalPages }).map((_, index: number) => {
        return (
          <PaginationButton
            onClick={onClick}
            key={index}
            content={index + 1}
            active={currentPage + 1 === index + 1}
          />
        );
      })}
    </div>
  );
};

export default PaginationButtons;
