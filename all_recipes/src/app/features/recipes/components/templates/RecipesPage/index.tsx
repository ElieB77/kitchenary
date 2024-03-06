import Title, { TitleProps } from "@/app/shared/components/atoms/Title";
import styles from "./styles.module.scss";
import PaginationButtons, {
  PaginationButtonsProps,
} from "@/app/features/search/components/molecules/PaginationButtons";
import Cards, { CardsProps } from "../../organisms/Cards";
import { FC } from "react";

interface RecipesPageProps
  extends TitleProps,
    CardsProps,
    PaginationButtonsProps {}

const RecipesPage: FC<RecipesPageProps> = ({
  firstWord,
  secondWord,
  cards,
  cardsBtnText,
  cardsBtnIcon,
  hasBtn,
  totalPages,
  currentPage,
  content,
  onClick,
}) => {
  return (
    <div className={styles.recipesPage}>
      <Title firstWord={firstWord} secondWord={secondWord} />

      <div className={styles.recipesPage__cards}>
        <Cards
          cards={cards}
          cardsBtnText={cardsBtnText}
          cardsBtnIcon={cardsBtnIcon}
          hasBtn={hasBtn}
        />
      </div>

      {totalPages > 1 && (
        <div className={styles.recipesPage__pagination}>
          <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            content={content}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
