import Image from "next/image";
import Card from "../features/recipes/components/organisms/Card";
import { NOODLES_IMG } from "../features/recipes/constants";
import { RIGHT_ARROW_ICON } from "../shared/constants";

export default function Home() {
  return (
    <Card
      image={NOODLES_IMG}
      title={"main course"}
      subtitle={"pepper noodles"}
      descriptionIcon={RIGHT_ARROW_ICON}
    />
  );
}
