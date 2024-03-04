"use client";
import {
  BROWNIES_IMG,
  BURGER_IMG,
  COOKIE_IMG,
  HOT_WINGS_IMG,
  MAC_AND_CHEESE_IMG,
  NOODLES_IMG,
  PANCAKE_IMG,
  PASTA_IMG,
  SALAD_IMG,
  SMOOTHIE_IMG,
  SOUP_IMG,
} from "../features/recipes/constants";
import { RIGHT_ARROW_ICON } from "../shared/constants";
import RoundedCard from "../features/recipes/components/molecules/RoundedCard";
import HomePage from "../shared/components/templates/HomePage";
import Card from "../features/recipes/components/molecules/Card";
import Tab from "../features/search/components/atoms/Tab";
import { TABS } from "../features/search/constants";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
              image={MAC_AND_CHEESE_IMG}
              title={"main course"}
              subtitle={"mac & cheese"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
            <Card
              image={HOT_WINGS_IMG}
              title={"fingerfood"}
              subtitle={"hot wings"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"chicken noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
            <Card
              image={BROWNIES_IMG}
              title={"dessert"}
              subtitle={"peanut butter brownies"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
            <Card
              image={SOUP_IMG}
              title={"soup"}
              subtitle={"mushroom soup"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
              hasLikeButton={false}
            />
          </>
        }
        cardsBtnText={"view all"}
        cardsBtnIcon={RIGHT_ARROW_ICON}
        searchSuggestionsTabs={TABS.map((el: any, index: number) => {
          return <Tab key={index} text={el.name} />;
        })}
        searchSuggestionsTitle={"popular searches"}
        placeholder={"search for"}
        onClick={() => router.push("/featured/pancake")}
        hasBtn={false}
      />
    </>
  );
}
