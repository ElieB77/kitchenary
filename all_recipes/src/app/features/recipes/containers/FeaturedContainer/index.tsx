"use client";
import { FC, useContext, useEffect, useState } from "react";
import FeaturedPage from "../../components/templates/FeaturedPage";
import { LibContext } from "@/app/shared/context/LibContext";
import FeaturedCard from "../../components/molecules/FeaturedCard";
import { getProperImageUrl } from "@/app/shared/utils";
import { RecipeType } from "../../types";
import { HEART_ICON } from "../../constants";
import { useRouter } from "next/navigation";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import { AccountContext } from "@/app/features/account/contexts/AccountContext";

interface FeaturedContainerProps {
  slug: string;
}

const FeaturedContainer: FC<FeaturedContainerProps> = ({ slug }) => {
  const router = useRouter();
  const [data, setData] = useState<RecipeType[] | undefined>([]);
  const [title, setTitle] = useState<string>("");
  const {
    pancakeRecipes,
    smoothieRecipes,
    burgerRecipes,
    pastaRecipes,
    cookieRecipes,
    saladRecipes,
  } = useContext(LibContext);
  const { addAndRemoveFavoriteRecipe, favoriteRecipeAlreadyExists } =
    useContext(AccountContext);

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
          setData([]);
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

  const renderFeaturedCards = () => {
    return data?.map((recipe: RecipeType, index: number) => {
      return (
        <FeaturedCard
          key={index}
          title={
            recipe.title.length > 50
              ? recipe.title.substring(0, 50) + "..."
              : recipe.title
          }
          count={index + 1}
          totalCount={`of ${pancakeRecipes?.number}`}
          imageSrc={getProperImageUrl(recipe.id, recipe.imageType)}
          btnText={"view recipe"}
          secondaryColor={false}
          likeIcon={HEART_ICON}
          btnOnClick={() => router.push(`/recipe/${recipe.id}`)}
          handleLikeBtnClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            addAndRemoveFavoriteRecipe(
              event,
              recipe.title,
              recipe.id,
              recipe.imageType
            )
          }
          isSaved={favoriteRecipeAlreadyExists(recipe.id) ? true : false}
        />
      );
    });
  };

  return (
    <FeaturedPage
      titleFirstWord={title}
      titleSecondWord={"recipes"}
      featuredCards={renderFeaturedCards()}
      btnText={"see more"}
      btnOnClick={() => router.push(`/recipes?query=${slug}`)}
      btnIcon={RIGHT_ARROW_ICON}
    />
  );
};

export default FeaturedContainer;
