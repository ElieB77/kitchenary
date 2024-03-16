"use client";
import {
  RecipeInformationsResultsType,
  RecipeResultType,
  RecipeType,
} from "@/app/features/recipes/types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface LibContextState {
  pancakeRecipes: RecipeResultType | null | undefined;
  smoothieRecipes: RecipeResultType | null | undefined;
  burgerRecipes: RecipeResultType | null | undefined;
  pastaRecipes: RecipeResultType | null | undefined;
  cookieRecipes: RecipeResultType | null | undefined;
  saladRecipes: RecipeResultType | null | undefined;
  recipeInformations: RecipeInformationsResultsType | null | undefined;
  getRecipeInformations: (id: string) => void;
  getRecipesBySearch: (query: string) => void;
  searchResults: RecipeType[] | null | undefined;
  recipes: RecipeType[] | null | undefined;
  getRecipes: (fullQuery: string) => void;
}

const LibContext = createContext<LibContextState>({
  pancakeRecipes: null,
  smoothieRecipes: null,
  burgerRecipes: null,
  pastaRecipes: null,
  cookieRecipes: null,
  saladRecipes: null,
  recipeInformations: null,
  getRecipeInformations: () => {},
  getRecipesBySearch: () => {},
  searchResults: null,
  recipes: null,
  getRecipes: () => {},
});

function LibProvider({ children }: { children: React.ReactNode }) {
  const [pancakeRecipes, setPancakeRecipes] = useState<RecipeResultType | null>(
    null
  );
  const [smoothieRecipes, setSmoothieRecipes] =
    useState<RecipeResultType | null>();
  const [burgerRecipes, setBurgerRecipes] = useState<RecipeResultType | null>(
    null
  );
  const [pastaRecipes, setPastaRecipes] = useState<RecipeResultType | null>(
    null
  );
  const [cookieRecipes, setCookieRecipes] = useState<RecipeResultType | null>(
    null
  );
  const [saladRecipes, setSaladRecipes] = useState<RecipeResultType | null>(
    null
  );
  const [recipeInformations, setRecipeInformations] =
    useState<RecipeInformationsResultsType | null>(null);
  const [searchResults, setSearchResults] = useState<RecipeType[] | null>(null);
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);

  const getRecipe = async (
    endpoint: string,
    setter: (data: RecipeResultType) => void
  ) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}${endpoint}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setter(response.data);
    } catch (error: any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  const getRecipes = async (fullQuery: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}/complexSearch?${fullQuery}&number=50&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setRecipes(response.data.results);
    } catch (error: any) {
      throw new Error(`Error fetching recipe details: ${error.message}`);
    }
  };

  useEffect(() => {
    const getAllRecipes = async () => {
      await Promise.all([
        getRecipe(
          "/complexSearch?query=pancake&sort=popularity&number=15",
          setPancakeRecipes
        ),
        getRecipe(
          "/complexSearch?query=smoothie&sort=popularity&number=15",
          setSmoothieRecipes
        ),
        getRecipe(
          "/complexSearch?query=burger&sort=popularity&number=15",
          setBurgerRecipes
        ),
        getRecipe(
          "/complexSearch?query=pasta&sort=popularity&number=15",
          setPastaRecipes
        ),
        getRecipe(
          "/complexSearch?query=cookie&sort=popularity&number=15",
          setCookieRecipes
        ),
        getRecipe(
          "/complexSearch?query=salad&sort=popularity&number=15",
          setSaladRecipes
        ),
      ]);
    };

    getAllRecipes();
  }, []);

  const getRecipesBySearch = async (query: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}/complexSearch?query=${query}&number=50&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setSearchResults(response.data.results);
    } catch (error: any) {
      throw new Error(`Error fetching recipe details: ${error.message}`);
    }
  };

  const getRecipeInformations = async (id: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}/${id}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setRecipeInformations(response.data);
    } catch (error: any) {
      throw new Error(`Error fetching recipe details: ${error.message}`);
    }
  };

  return (
    <LibContext.Provider
      value={{
        pancakeRecipes,
        smoothieRecipes,
        burgerRecipes,
        pastaRecipes,
        cookieRecipes,
        saladRecipes,
        recipeInformations,
        getRecipeInformations,
        getRecipesBySearch,
        searchResults,
        getRecipes,
        recipes,
      }}
    >
      {children}
    </LibContext.Provider>
  );
}

export { LibProvider, LibContext };
