import styles from "./styles.module.scss";
import Image from "next/image";
import { FC } from "react";
import { ImageType } from "@/app/shared/types";

export interface SavedItemsProps {
  title: string;
  imageSrc: string;
  deleteIcon: ImageType;
  handleClick: () => void;
  handleDeleteClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SavedItems: FC<SavedItemsProps> = ({
  imageSrc,
  title,
  deleteIcon,
  handleClick,
  handleDeleteClick,
}) => {
  return (
    <div className={styles.savedItems} onClick={handleClick}>
      <div className={styles.savedItems__image}>
        <Image src={imageSrc} fill alt={title} />
      </div>
      <h5 className={styles.savedItems__title}>{title}</h5>
      <div className={styles.savedItems__deleteBtn} onClick={handleDeleteClick}>
        <Image {...deleteIcon} />
      </div>
    </div>
  );
};

export default SavedItems;
