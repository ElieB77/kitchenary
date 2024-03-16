"use client";
import { TRASH_ICON } from "@/app/shared/constants";
import SavedItemsPage from "../../components/templates/SavedItemsPage";
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";
import { getProperImageUrl } from "@/app/shared/utils";
import SavedItems from "../../components/molecules/SavedItems";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/features/authentication/contexts/AuthContext";
import { FavoriteRecipeType } from "@/app/features/recipes/types";

const SavedItemsPageContainer = () => {
  const router = useRouter();
  const { userEmail } = useContext(AuthContext);
  const { favoriteRecipes, deleteFavoriteRecipe } = useContext(AccountContext);

  const renderSavedItems = () => {
    return favoriteRecipes.map(
      (favoriteRecipe: FavoriteRecipeType, index: number) => {
        return (
          <SavedItems
            key={index}
            title={favoriteRecipe.recipeTitle}
            imageSrc={getProperImageUrl(
              favoriteRecipe.recipeId,
              favoriteRecipe.recipeImageType
            )}
            deleteIcon={TRASH_ICON}
            handleClick={() =>
              router.push(`/recipe/${favoriteRecipe.recipeId}`)
            }
            handleDeleteClick={(event: React.MouseEvent<HTMLDivElement>) => {
              event.stopPropagation();
              deleteFavoriteRecipe(favoriteRecipe.recipeId, userEmail);
            }}
          />
        );
      }
    );
  };

  return (
    <SavedItemsPage
      firstWord={"saved"}
      secondWord={"items"}
      savedItems={renderSavedItems()}
      description={`Welcome to Your Saved Recipes Page! Explore your curated collection of
      favorite dishes, ready to inspire your next culinary adventure. Enjoy
      cooking with ease and elevate your experience. Happy cooking!`}
      isEmpty={favoriteRecipes.length === 0 ? true : false}
      descriptionIfEmpty={
        "Welcome to your Saved Recipes page! It's empty for now, but you can start adding your favorite recipes to build your collection. Explore and save recipes here for easy access whenever you need cooking inspiration. Start adding recipes now!"
      }
    />
  );
};

export default SavedItemsPageContainer;
