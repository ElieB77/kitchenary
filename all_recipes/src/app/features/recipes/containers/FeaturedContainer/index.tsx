"use client";
import { FC, useContext, useEffect, useState } from "react";
import FeaturedPage from "../../components/templates/FeaturedPage";
import { LibContext } from "@/app/shared/context/LibContext";
import FeaturedCard from "../../components/molecules/FeaturedCard";
import { getProperImageUrl } from "@/app/shared/utils";
import { FeaturedRecipeType } from "../../types";
import { HEART_ICON } from "../../constants";
import { useRouter } from "next/navigation";

interface FeaturedContainerProps {
  slug: string;
}

const FeaturedContainer: FC<FeaturedContainerProps> = ({ slug }) => {
  const router = useRouter();
  const [data, setData] = useState<FeaturedRecipeType[] | null>(null);
  const [title, setTitle] = useState<string>("");
  const {
    pancakeRecipes,
    smoothieRecipes,
    burgerRecipes,
    pastaRecipes,
    cookieRecipes,
    saladRecipes,
  } = useContext(LibContext);

  useEffect(() => {
    if (slug) {
      switch (slug) {
        case "pancake":
          setData(pancakeRecipes?.results);
          setTitle("pancake");
          break;
        case "smoothie":
          setData(smoothieRecipes?.results);
          setTitle("smoothie");
          break;
        case "burger":
          setData(burgerRecipes?.results);
          setTitle("burger");
          break;
        case "pasta":
          setData(pastaRecipes?.results);
          setTitle("pasta");
          break;
        case "cookie":
          setData(cookieRecipes?.results);
          setTitle("cookie");
          break;
        case "salad":
          setData(saladRecipes?.results);
          setTitle("salad");
          break;
        default:
          setData(null);
          setTitle("");
      }
    }
  }, [
    slug,
    pancakeRecipes,
    smoothieRecipes,
    burgerRecipes,
    pastaRecipes,
    cookieRecipes,
    saladRecipes,
  ]);

  if (!data) return null;

  const renderFeaturedCards = () => {
    return data?.map((recipe: FeaturedRecipeType, index: number) => {
      return (
        <FeaturedCard
          key={index}
          title={recipe.title}
          count={index + 1}
          totalCount={`of ${pancakeRecipes.number}`}
          imageSrc={getProperImageUrl(recipe.id, recipe.imageType)}
          btnText={"view recipe"}
          secondaryColor={false}
          likeIcon={HEART_ICON}
          btnOnClick={() => router.push(`/recipe/${recipe.id}`)}
        />
      );
    });
  };

  return (
    <FeaturedPage
      titleFirstWord={title}
      titleSecondWord={"recipes"}
      featuredCards={renderFeaturedCards()}
      btnText={"see all"}
      btnOnClick={undefined!}
    />
  );
};

export default FeaturedContainer;
