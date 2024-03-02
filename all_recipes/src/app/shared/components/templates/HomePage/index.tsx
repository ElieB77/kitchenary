"use client";
import styles from "./styles.module.scss";
import CardXL, {
  CardXLProps,
} from "@/app/features/recipes/components/organisms/CardXL";
import CategorySlider, {
  CategorySliderProps,
} from "@/app/features/recipes/components/organisms/CategorySlider";
import { FC } from "react";
import Title from "../../atoms/Title";
import Cards, {
  CardsProps,
} from "@/app/features/recipes/components/organisms/Cards";
import SearchSuggestions, {
  SearchSuggestionsProps,
} from "@/app/features/search/components/organisms/SearchSuggestions";

interface HomePageProps
  extends CardXLProps,
    CategorySliderProps,
    CardsProps,
    SearchSuggestionsProps {
  categorySliderTitleFirstWord: string;
  categorySliderTitleSecondWord: string;
  popularRecipesTitleFirstWord: string;
  popularRecipesTitleSecondWord: string;
}

const HomePage: FC<HomePageProps> = ({
  image,
  title,
  description,
  footerText,
  icon,
  roundedCards,
  categorySliderTitleFirstWord,
  categorySliderTitleSecondWord,
  popularRecipesTitleFirstWord,
  popularRecipesTitleSecondWord,
  cards,
  cardsBtnText,
  cardsBtnIcon,
  searchSuggestionsTabs,
  searchSuggestionsTitle,
  placeholder,
}) => {
  return (
    <div className={styles.homePage}>
      <CardXL
        image={image}
        title={title}
        description={description}
        footerText={footerText}
        icon={icon}
      />

      <div>
        <Title
          firstWord={categorySliderTitleFirstWord}
          secondWord={categorySliderTitleSecondWord}
        />
        <CategorySlider roundedCards={roundedCards} />
      </div>

      <SearchSuggestions
        searchSuggestionsTabs={searchSuggestionsTabs}
        placeholder={placeholder}
        icon={icon}
        searchSuggestionsTitle={searchSuggestionsTitle}
      />

      <div>
        <Title
          firstWord={popularRecipesTitleFirstWord}
          secondWord={popularRecipesTitleSecondWord}
        />
        <Cards
          cards={cards}
          cardsBtnText={cardsBtnText}
          cardsBtnIcon={cardsBtnIcon}
        />
      </div>
    </div>
  );
};

export default HomePage;
