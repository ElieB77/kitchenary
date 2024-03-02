import FeaturedCard from "@/app/features/recipes/components/organisms/FeaturedCard";
import FeaturedPage from "@/app/features/recipes/components/templates/FeaturedPage";
import { NOODLES_IMG } from "@/app/features/recipes/constants";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";

export default function Featured() {
  return (
    <>
      <FeaturedPage
        titleFirstWord={"pancake"}
        titleSecondWord={"recipes"}
        featuredCards={
          <>
            <FeaturedCard
              title={"Beef Noodles"}
              count={0}
              totalCount={"of " + 20}
              image={NOODLES_IMG}
              text={"view recipe"}
              icon={RIGHT_ARROW_ICON}
            />
            <FeaturedCard
              title={"Beef Noodles"}
              count={0}
              totalCount={"of " + 20}
              image={NOODLES_IMG}
              text={"view recipe"}
              icon={RIGHT_ARROW_ICON}
            />
            <FeaturedCard
              title={"Beef Noodles"}
              count={0}
              totalCount={"of " + 20}
              image={NOODLES_IMG}
              text={"view recipe"}
              icon={RIGHT_ARROW_ICON}
            />
            <FeaturedCard
              title={"Beef Noodles"}
              count={0}
              totalCount={"of " + 20}
              image={NOODLES_IMG}
              text={"view recipe"}
              icon={RIGHT_ARROW_ICON}
            />
            <FeaturedCard
              title={"Beef Noodles"}
              count={0}
              totalCount={"of " + 20}
              image={NOODLES_IMG}
              text={"view recipe"}
              icon={RIGHT_ARROW_ICON}
            />
          </>
        }
      />
    </>
  );
}
