"use client";

import styles from "./styles.module.scss";
import CardXL, {
  CardXLProps,
} from "@/app/features/recipes/components/organisms/CardXL";
import CategorySlider, {
  CategorySliderProps,
} from "@/app/features/recipes/components/organisms/CategorySlider";
import { FC } from "react";
import Title, { TitleProps } from "../../atoms/Title";
import Cards, {
  CardsProps,
} from "@/app/features/recipes/components/organisms/Cards";
import SearchSuggestions from "@/app/features/search/components/organisms/SearchSuggestions";
import { SEARCH_ICON } from "@/app/shared/constants";
import { TABS } from "@/app/features/search/constants";
import Tab from "@/app/features/search/components/atoms/Tab";

interface HomePageProps extends CardXLProps, CategorySliderProps, CardsProps {
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
        tabs={TABS.map((el: any, index: number) => {
          return <Tab key={index} text={el.name} />;
        })}
        placeholder={"Search"}
        icon={SEARCH_ICON}
        title={"popular searches"}
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
