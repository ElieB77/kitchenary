import Title, { TitleProps } from "@/app/shared/components/atoms/Title";
import styles from "./styles.module.scss";
import { FC } from "react";

interface SavedItemsPageProps extends TitleProps {
  savedItems: JSX.Element[];
  description: string;
  isEmpty: boolean;
  descriptionIfEmpty: string;
}

const SavedItemsPage: FC<SavedItemsPageProps> = ({
  firstWord,
  secondWord,
  savedItems,
  description,
  isEmpty,
  descriptionIfEmpty,
}) => {
  return (
    <div className={styles.savedItemsPage}>
      <div className={styles.savedItemsPage__head}>
        <Title firstWord={firstWord} secondWord={secondWord} />
        {isEmpty ? <p>{descriptionIfEmpty}</p> : <p>{description}</p>}
      </div>
      <div className={styles.savedItemsPage__container}>{savedItems}</div>
    </div>
  );
};

export default SavedItemsPage;
