"use client";
import { NOODLES_IMG, PANCAKE_IMG } from "../features/recipes/constants";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "../shared/constants";
import RoundedCard from "../features/recipes/components/molecules/RoundedCard";
import HomePage from "../shared/components/templates/HomePage";
import Card from "../features/recipes/components/organisms/Card";
import Tab from "../features/search/components/atoms/Tab";
import { TABS } from "../features/search/constants";

export default function Home() {
  return (
    <>
      <HomePage
        image={PANCAKE_IMG}
        title={"pancakes recipes"}
        description={
          "Every stack of fluffy pancakes deserves a finishing touch of sweetness, but if that's not enough, we've got you covered. From classic buttermilk pancakes to indulgent chocolate chip stacks, these are the most syrup-drenched pancakes we've got!"
        }
        footerText={"Discover More Pancakes Here"}
        icon={RIGHT_ARROW_ICON}
        roundedCards={
          <>
            <RoundedCard image={NOODLES_IMG} title={"Noodles"} />
            <RoundedCard image={NOODLES_IMG} title={"Noodles"} />
            <RoundedCard image={NOODLES_IMG} title={"Noodles"} />
            <RoundedCard image={NOODLES_IMG} title={"Noodles"} />
            <RoundedCard image={NOODLES_IMG} title={"Noodles"} />
          </>
        }
        categorySliderTitleFirstWord={"tasty"}
        categorySliderTitleSecondWord={"selection"}
        popularRecipesTitleFirstWord={"popular"}
        popularRecipesTitleSecondWord={"recipes"}
        cards={
          <>
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
            />
            <Card
              image={NOODLES_IMG}
              title={"main course"}
              subtitle={"pepper noodles"}
              descriptionIcon={RIGHT_ARROW_ICON}
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
      />
    </>
  );
}
