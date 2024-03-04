"use client";
import { useContext } from "react";
import FeaturedPage from "../../components/templates/FeaturedPage";
import { LibContext } from "@/app/shared/context/LibContext";
import FeaturedCard from "../../components/molecules/FeaturedCard";
import { getProperImageUrl } from "@/app/shared/utils";
import { FeaturedRecipeType } from "../../types";

const FeaturedContainer = () => {
  const { pancakeRecipes } = useContext(LibContext);

  const renderCards = () => {
    if (!pancakeRecipes || !pancakeRecipes.results) return null;

    return pancakeRecipes?.results?.map(
      (recipe: FeaturedRecipeType, index: number) => {
        return (
          <FeaturedCard
            key={index}
            title={recipe.title}
            count={index + 1}
            totalCount={`of ${pancakeRecipes.number}`}
            imageSrc={getProperImageUrl(recipe.id, recipe.imageType)}
            btnText={"view recipe"}
          />
        );
      }
    );
  };

  return (
    <FeaturedPage
      titleFirstWord={"pancake"}
      titleSecondWord={"recipes"}
      featuredCards={renderCards()}
    />
  );
};

export default FeaturedContainer;
