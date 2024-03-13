"use client";
import styles from "./styles.module.scss";
import CardXL, {
  CardXLProps,
} from "@/app/features/recipes/components/molecules/CardXL";
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
import Button, { ButtonProps } from "../../atoms/Button";

interface HomePageProps
  extends CardXLProps,
    CategorySliderProps,
    CardsProps,
    SearchSuggestionsProps,
    ButtonProps {
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
  searchSuggestionsTabs,
  searchSuggestionsTitle,
  placeholder,
  onClick,
  onChange,
  onSubmit,
  value,
  type,
  searchBarIcon,
  btnText,
  btnOnClick,
}) => {
  return (
    <div className={styles.homePage}>
      <CardXL
        image={image}
        title={title}
        description={description}
        footerText={footerText}
        icon={icon}
        onClick={onClick}
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
        searchBarIcon={searchBarIcon}
        searchSuggestionsTitle={searchSuggestionsTitle}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        type={type}
      />

      <div>
        <Title
          firstWord={popularRecipesTitleFirstWord}
          secondWord={popularRecipesTitleSecondWord}
        />
        <Cards cards={cards} />
        <Button btnText={btnText} btnOnClick={btnOnClick} />
      </div>
    </div>
  );
};

export default HomePage;
