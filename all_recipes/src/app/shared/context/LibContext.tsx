"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface LibContextState {
  pancakeRecipes: any;
  smoothieRecipes: any;
  burgerRecipes: any;
  pastaRecipes: any;
  cookieRecipes: any;
  saladRecipes: any;
  recipeInformations: any;
  getRecipeInformations: (id: string) => void;
  getRecipesBySearch: (query: string) => void;
  searchResults: any;
  recipes: any;
  getRecipes: (fullQuery: string) => void;
}

const LibContext = createContext<LibContextState>({
  pancakeRecipes: null,
  smoothieRecipes: null,
  burgerRecipes: null,
  pastaRecipes: null,
  cookieRecipes: null,
  saladRecipes: null,
  recipeInformations: undefined,
  getRecipeInformations: () => {},
  getRecipesBySearch: () => {},
  searchResults: undefined,
  recipes: undefined,
  getRecipes: () => {},
});

function LibProvider({ children }: { children: React.ReactNode }) {
  const [pancakeRecipes, setPancakeRecipes] = useState<any>();
  const [smoothieRecipes, setSmoothieRecipes] = useState<any>();
  const [burgerRecipes, setBurgerRecipes] = useState<any>();
  const [pastaRecipes, setPastaRecipes] = useState<any>();
  const [cookieRecipes, setCookieRecipes] = useState<any>();
  const [saladRecipes, setSaladRecipes] = useState<any>();
  const [recipeInformations, setRecipeInformations] = useState<any>();
  const [searchResults, setSearchResults] = useState<any>();
  const [recipes, setRecipes] = useState<any>();

  const getRecipe = async (endpoint: string, setter: (data: any) => void) => {
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
