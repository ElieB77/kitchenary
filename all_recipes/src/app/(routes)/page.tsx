"use client";
import { PANCAKE_IMG } from "../features/recipes/constants";
import {
  POPULAR_CARDS,
  RIGHT_ARROW_ICON,
  ROUNDED_CARDS,
  SEARCH_ICON,
} from "../shared/constants";
import RoundedCard from "../features/recipes/components/molecules/RoundedCard";
import HomePage from "../shared/components/templates/HomePage";
import Card from "../features/recipes/components/molecules/Card";
import Tab from "../features/search/components/atoms/Tab";
import { TABS } from "../features/search/constants";
import { useRouter } from "next/navigation";
import useSearchBar from "../features/search/hooks/useSearchBar";
import {
  NavLinksType,
  PopularCardsType,
  RoundedCardsType,
} from "../shared/types";

export default function Home() {
  const router = useRouter();
  const { handleSubmit, handleChange, searchValue } = useSearchBar();

  return (
    <>
      <HomePage
        image={PANCAKE_IMG}
        title={"our 15 pancakes recipes"}
        description={
          "Every stack of fluffy pancakes deserves a finishing touch of sweetness, but if that's not enough, we've got you covered. From classic buttermilk pancakes to indulgent chocolate chip stacks, these are the most syrup-drenched pancakes we've got!"
        }
        footerText={"Discover More Pancakes Here"}
        icon={RIGHT_ARROW_ICON}
        roundedCards={ROUNDED_CARDS.map((roundedCard: RoundedCardsType) => {
          return (
            <RoundedCard
              key={roundedCard.id}
              image={roundedCard.image}
              title={roundedCard.title}
              onClick={() => router.push(roundedCard.navigateTo)}
            />
          );
        })}
        categorySliderTitleFirstWord={"tasty"}
        categorySliderTitleSecondWord={"selection"}
        popularRecipesTitleFirstWord={"popular"}
        popularRecipesTitleSecondWord={"recipes"}
        cards={POPULAR_CARDS.map((popularCard: PopularCardsType) => {
          return (
            <Card
              key={popularCard.id}
              imageSrc={popularCard.imageSrc}
              title={popularCard.title}
              subtitle={popularCard.subtitle}
              descriptionIcon={popularCard.descriptionIcon}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push(popularCard.navigateTo)}
              handleLikeBtnClick={undefined!}
              isSaved={false}
            />
          );
        })}
        btnText={"view all"}
        btnIcon={RIGHT_ARROW_ICON}
        searchSuggestionsTabs={TABS.map((tab: NavLinksType, index: number) => {
          return (
            <Tab
              key={index}
              text={tab.name}
              onClick={() => router.push(`/search?query=${tab.id}`)}
            />
          );
        })}
        searchSuggestionsTitle={"popular searches"}
        placeholder={"Search"}
        onClick={() => router.push("/featured/pancake")}
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={searchValue}
        btnOnClick={() => router.push(`/recipes?sort=popularity`)}
        type={"text"}
        searchBarIcon={SEARCH_ICON}
      />
    </>
  );
}
