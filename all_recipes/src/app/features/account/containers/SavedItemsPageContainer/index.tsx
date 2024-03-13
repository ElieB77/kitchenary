"use client";
import { TRASH_ICON } from "@/app/shared/constants";
import SavedItemsPage from "../../components/templates/SavedItemsPage";
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";
import { getProperImageUrl } from "@/app/shared/utils";
import SavedItems from "../../components/molecules/SavedItems";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/features/authentication/contexts/AuthContext";

const SavedItemsPageContainer = () => {
  const router = useRouter();
  const { userEmail } = useContext(AuthContext);
  const { favoriteRecipes, deleteFavoriteRecipe } = useContext(AccountContext);

  const renderSavedItems = () => {
    return favoriteRecipes.map((el: any, index: number) => {
      return (
        <SavedItems
          key={index}
          title={el.recipeTitle}
          imageSrc={getProperImageUrl(el.recipeId, el.recipeImageType)}
          deleteIcon={TRASH_ICON}
          handleClick={() => router.push(`/recipe/${el.recipeId}`)}
          handleDeleteClick={(event: any) => {
            event.stopPropagation();
            deleteFavoriteRecipe(el.recipeId, userEmail);
          }}
        />
      );
    });
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
