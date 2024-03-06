"use client";
import {
  BROWNIES_IMG,
  BURGER_IMG,
  COOKIE_IMG,
  COUSCOUS_IMG,
  HOT_WINGS_IMG,
  MAC_AND_CHEESE_IMG,
  NOODLES_IMG,
  PANCAKE_IMG,
  PASTA_IMG,
  SALAD_IMG,
  SMOOTHIE_IMG,
  SOUP_IMG,
} from "../features/recipes/constants";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "../shared/constants";
import RoundedCard from "../features/recipes/components/molecules/RoundedCard";
import HomePage from "../shared/components/templates/HomePage";
import Card from "../features/recipes/components/molecules/Card";
import Tab from "../features/search/components/atoms/Tab";
import { TABS } from "../features/search/constants";
import { useRouter } from "next/navigation";
import useSearchBar from "../features/search/hooks/useSearchBar";
import { QueryItemType } from "../shared/types";

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
        roundedCards={
          <>
            <RoundedCard
              image={SMOOTHIE_IMG}
              title={"smoothies"}
              onClick={() => router.push("/featured/smoothie")}
            />
            <RoundedCard
              image={BURGER_IMG}
              title={"burgers"}
              onClick={() => router.push("/featured/burger")}
            />
            <RoundedCard
              image={PASTA_IMG}
              title={"Pastas"}
              onClick={() => router.push("/featured/pasta")}
            />
            <RoundedCard
              image={COOKIE_IMG}
              title={"Cookies"}
              onClick={() => router.push("/featured/cookie")}
            />
            <RoundedCard
              image={SALAD_IMG}
              title={"Salads"}
              onClick={() => router.push("/featured/salad")}
            />
          </>
        }
        categorySliderTitleFirstWord={"tasty"}
        categorySliderTitleSecondWord={"selection"}
        popularRecipesTitleFirstWord={"popular"}
        popularRecipesTitleSecondWord={"recipes"}
        cards={
          <>
            <Card
              imageSrc={MAC_AND_CHEESE_IMG.src}
              title={"main course"}
              subtitle={"mac & cheese"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push("/recipes?query=mac-and-cheese")}
            />
            <Card
              imageSrc={HOT_WINGS_IMG.src}
              title={"fingerfood"}
              subtitle={"hot wings"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push("/recipes?query=hot-wings")}
            />
            <Card
              imageSrc={NOODLES_IMG.src}
              title={"main course"}
              subtitle={"chicken noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push("/recipes?query=chicken-noodles")}
            />
            <Card
              imageSrc={BROWNIES_IMG.src}
              title={"dessert"}
              subtitle={"peanut butter brownies"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() =>
                router.push("/recipes?query=peanut-butter-brownies")
              }
            />
            <Card
              imageSrc={SOUP_IMG.src}
              title={"soup"}
              subtitle={"mushroom soup"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push("/recipes?query=mushroom-soup")}
            />
            <Card
              imageSrc={COUSCOUS_IMG.src}
              title={"main course"}
              subtitle={"couscous"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
              secondaryColor={false}
              likeIcon={undefined!}
              onClick={() => router.push("/recipes?query=couscous")}
            />
          </>
        }
        btnText={"view all"}
        btnIcon={RIGHT_ARROW_ICON}
        searchSuggestionsTabs={TABS.map((tab: QueryItemType, index: number) => {
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
        hasBtn={true}
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
