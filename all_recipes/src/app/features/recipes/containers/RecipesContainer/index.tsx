"use client";
import { useRouter, useSearchParams } from "next/navigation";
import RecipesPage from "../../components/templates/RecipesPage";
import { FC, useContext, useEffect } from "react";
import { LibContext } from "@/app/shared/context/LibContext";
import Card from "../../components/molecules/Card";
import { getProperImageUrl } from "@/app/shared/utils";
import { HEART_ICON } from "../../constants";
import usePagination from "@/app/features/search/hooks/usePagination";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import { RecipeType } from "../../types";
import { AccountContext } from "@/app/features/account/contexts/AccountContext";

const RecipesPageContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query =
    (searchParams.get("type") && searchParams.get("type")) ||
    (searchParams.get("cuisine") && searchParams.get("cuisine")) ||
    (searchParams.get("diet") && searchParams.get("diet")) ||
    (searchParams.get("includeIngredients") &&
      searchParams.get("includeIngredients")) ||
    (searchParams.get("query") && searchParams.get("query")) ||
    (searchParams.get("sort") && searchParams.get("sort"));
  const queryString = searchParams.toString();
  const { getRecipes, recipes } = useContext(LibContext);
  const { addAndRemoveFavoriteRecipe, favoriteRecipeAlreadyExists } =
    useContext(AccountContext);
  const {
    handlePagination,
    currentPageNumber,
    getTotalPages,
    getCurrentPageData,
  } = usePagination();

  useEffect(() => {
    getRecipes(queryString);
  }, [queryString, query]);

  if (!recipes) return null;

  const renderResults = () => {
    return getCurrentPageData(recipes).map(
      (recipe: RecipeType, index: number) => {
        const { id, imageType, title } = recipe;
        return (
          <Card
            key={index}
            imageSrc={getProperImageUrl(id, imageType)}
            title={undefined!}
            subtitle={
              title.length > 25 ? title.substring(0, 25) + "..." : title
            }
            descriptionIcon={RIGHT_ARROW_ICON}
            hasLikeButton={true}
            secondaryColor={false}
            likeIcon={HEART_ICON}
            onClick={() => router.push(`/recipe/${id}`)}
            handleLikeBtnClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              addAndRemoveFavoriteRecipe(event, title, id, imageType)
            }
            isSaved={favoriteRecipeAlreadyExists(id) ? true : false}
          />
        );
      }
    );
  };

  return (
    <>
      <RecipesPage
        firstWord={undefined!}
        secondWord={
          query === "popularity" ? "popular" : query?.replaceAll("-", " ")!
        }
        cards={renderResults()}
        totalPages={getTotalPages(recipes)}
        currentPage={currentPageNumber}
        content={undefined!}
        onClick={handlePagination}
      />
    </>
  );
};

export default RecipesPageContainer;
