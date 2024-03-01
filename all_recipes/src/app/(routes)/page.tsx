import Image from "next/image";
import Card from "../features/recipes/components/organisms/Card";
import { NOODLES_IMG } from "../features/recipes/constants";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "../shared/constants";
import Button from "../shared/components/atoms/Button";
import RoundedCard from "../features/recipes/components/organisms/RoundedCard";
import SearchBar from "../features/search/components/molecules/SearchBar";
import CardXL from "../features/recipes/components/organisms/CardXL";

export default function Home() {
  return (
    <>
      <CardXL
        image={NOODLES_IMG}
        title={"beef noodles"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus soluta tempore animi exercitationem omnis consequuntur quidem recusandae nihil maxime fugit."
        }
        footerText={"quidem recusandae nihil"}
        icon={RIGHT_ARROW_ICON}
      />
      <Card
        image={NOODLES_IMG}
        title={"main course"}
        subtitle={"pepper noodles"}
        descriptionIcon={RIGHT_ARROW_ICON}
      />

      <Button text={"view all recipes"} icon={RIGHT_ARROW_ICON} />

      <RoundedCard image={NOODLES_IMG} title={"MEALS"} />
      <SearchBar placeholder={"Search"} icon={SEARCH_ICON} />
    </>
  );
}
