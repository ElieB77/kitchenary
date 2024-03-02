import { NOODLES_IMG, PANCAKE_IMG } from "../features/recipes/constants";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "../shared/constants";
import RoundedCard from "../features/recipes/components/molecules/RoundedCard";
import HomePage from "../shared/components/templates/HomePage";
import Card from "../features/recipes/components/organisms/Card";

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
      />
    </>
    /* <CardXL
        image={NOODLES_IMG}
        title={"beef noodles"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus soluta tempore animi exercitationem omnis consequuntur quidem recusandae nihil maxime fugit."
        }
        footerText={"quidem recusandae nihil"}
        icon={RIGHT_ARROW_ICON}
      />

      <SearchSuggestions
        placeholder={"Search"}
        icon={SEARCH_ICON}
        firstWord={"Popular"}
        secondWord={"Searches"}
        tabs={TABS.map((tab: any, index: number) => {
          return <Tab text={tab.name} />;
        })}
      />

      <Card
        image={NOODLES_IMG}
        title={"main course"}
        subtitle={"pepper noodles"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />

      <Button text={"view all recipes"} icon={RIGHT_ARROW_ICON} />

      <RoundedCard image={NOODLES_IMG} title={"MEALS"} />
      <SearchBar placeholder={"Search"} icon={SEARCH_ICON} /> */
  );
}
