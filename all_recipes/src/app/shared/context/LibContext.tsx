"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import ErrorPage from "../components/templates/ErrorPage";
import { useRouter } from "next/navigation";

interface LibContextState {
  pancakeRecipes: any;
  smoothieRecipes: any;
  burgerRecipes: any;
  pastaRecipes: any;
  cookieRecipes: any;
  saladRecipes: any;
  recipeInformations: any;
  getRecipeInformations: any;
  getRecipesBySearch: any;
  searchResults: any;
}

const LibContext = createContext<LibContextState>({
  pancakeRecipes: undefined,
  smoothieRecipes: undefined,
  burgerRecipes: undefined,
  pastaRecipes: undefined,
  cookieRecipes: undefined,
  saladRecipes: undefined,
  recipeInformations: undefined,
  getRecipeInformations: undefined,
  getRecipesBySearch: undefined,
  searchResults: undefined,
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

  const getRecipesBySearch = async (query: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}/complexSearch?query=${query}&number=50&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setSearchResults(response.data.results);
    } catch (error: any) {
      console.error(`Error fetching recipe details: ${error.message}`);
    }
  };

  const getRecipeInformations = async (id: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}/${id}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setRecipeInformations(response.data);
    } catch (error: any) {
      console.error(`Error fetching recipe details: ${error.message}`);
    }
  };

  const getRecipe = async (endpoint: string, setter: (data: any) => void) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}${endpoint}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setter(response.data);
    } catch (error: any) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    const getAllRecipes = async () => {
      await Promise.all([
        getRecipe(
          "/complexSearch?query=pancake&sort=popularity",
          setPancakeRecipes
        ),
        getRecipe(
          "/complexSearch?query=smoothie&sort=popularity",
          setSmoothieRecipes
        ),
        getRecipe(
          "/complexSearch?query=burger&sort=popularity",
          setBurgerRecipes
        ),
        getRecipe(
          "/complexSearch?query=pasta&sort=popularity",
          setPastaRecipes
        ),
        getRecipe(
          "/complexSearch?query=cookie&sort=popularity",
          setCookieRecipes
        ),
        getRecipe(
          "/complexSearch?query=salad&sort=popularity",
          setSaladRecipes
        ),
      ]);
    };

    getAllRecipes();
  }, []);

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
      }}
    >
      {children}
    </LibContext.Provider>
  );
}

export { LibProvider, LibContext };
