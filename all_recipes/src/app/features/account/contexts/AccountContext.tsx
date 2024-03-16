"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../authentication/contexts/AuthContext";
import { FavoriteRecipeType } from "../../recipes/types";

interface AccountContextState {
  favoriteRecipes: FavoriteRecipeType[];
  addAndRemoveFavoriteRecipe: (
    event: React.MouseEvent<HTMLButtonElement>,
    recipeTitle: string,
    recipeId: number,
    recipeImageType: string
  ) => void;
  deleteFavoriteRecipe: (recipeId: number, userEmail: string) => Promise<void>;
  favoriteRecipeAlreadyExists: (
    recipeId: number
  ) => FavoriteRecipeType | undefined;
}

const AccountContext = createContext<AccountContextState>({
  favoriteRecipes: [],
  addAndRemoveFavoriteRecipe: () => {},
  deleteFavoriteRecipe: async () => {},
  favoriteRecipeAlreadyExists: () => undefined,
});

function AccountProvider({ children }: { children: React.ReactNode }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipeType[]>(
    []
  );
  const { userEmail, isLoggedIn } = useContext(AuthContext);

  const getUserFavoriteRecipes = async () => {
    try {
      const response = await axios.get(
        `/api/favorites/get-recipes?email=${userEmail}`
      );
      setFavoriteRecipes(response.data.recipes);
    } catch (error: any) {
      toast.error("Something went wrong. Please try again later.");
      throw new Error(error);
    }
  };

  const favoriteRecipeAlreadyExists = (recipeId: number) => {
    return favoriteRecipes?.find(
      (favoriteRecipe: FavoriteRecipeType) =>
        favoriteRecipe.recipeId === recipeId
    );
  };

  const addFavoriteRecipe = async (
    recipeTitle: string,
    recipeId: number,
    recipeImageType: string
  ) => {
    try {
      await axios.post("/api/favorites/add-recipe", {
        email: userEmail,
        recipeTitle: recipeTitle,
        recipeId: recipeId,
        recipeImageType: recipeImageType,
      });
      const newRecipe = {
        recipeTitle,
        recipeId: recipeId,
        recipeImageType: recipeImageType,
      };
      setFavoriteRecipes((prevRecipes: FavoriteRecipeType[]) => [
        ...prevRecipes,
        newRecipe,
      ]);
    } catch (error: any) {
      toast.error("Something went wrong. Please try again later.");
      throw new Error(error);
    }
  };

  const deleteFavoriteRecipe = async (recipeId: number, userEmail: string) => {
    try {
      await axios.delete(
        `/api/favorites/delete-recipe?email=${userEmail}&recipeId=${recipeId}`
      );
      setFavoriteRecipes((prevRecipes: FavoriteRecipeType[]) =>
        prevRecipes.filter((recipe) => recipe.recipeId !== recipeId)
      );
    } catch (error: any) {
      toast.error("Something went wrong. Please try again later.");
      throw new Error(error);
    }
  };

  const addAndRemoveFavoriteRecipe = (
    event: React.MouseEvent<HTMLButtonElement>,
    recipeTitle: string,
    recipeId: number,
    recipeImageType: string
  ) => {
    event?.stopPropagation();
    if (!isLoggedIn) {
      return toast.info("You must be logged in to save items.");
    }

    if (favoriteRecipeAlreadyExists(recipeId)) {
      deleteFavoriteRecipe(recipeId, userEmail);
    } else {
      addFavoriteRecipe(recipeTitle, recipeId, recipeImageType);
      toast.success("Saved!", { autoClose: 500 });
    }
  };

  useEffect(() => {
    if (userEmail) {
      getUserFavoriteRecipes();
    }
  }, [userEmail]);

  return (
    <AccountContext.Provider
      value={{
        favoriteRecipes,
        addAndRemoveFavoriteRecipe,
        deleteFavoriteRecipe,
        favoriteRecipeAlreadyExists,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export { AccountProvider, AccountContext };
