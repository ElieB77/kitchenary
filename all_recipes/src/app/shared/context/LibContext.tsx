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
}

const LibContext = createContext<LibContextState>({
  pancakeRecipes: undefined,
  smoothieRecipes: undefined,
  burgerRecipes: undefined,
  pastaRecipes: undefined,
  cookieRecipes: undefined,
  saladRecipes: undefined,
});

function LibProvider({ children }: { children: React.ReactNode }) {
  const [pancakeRecipes, setPancakeRecipes] = useState<any>();
  const [smoothieRecipes, setSmoothieRecipes] = useState<any>();
  const [burgerRecipes, setBurgerRecipes] = useState<any>();
  const [pastaRecipes, setPastaRecipes] = useState<any>();
  const [cookieRecipes, setCookieRecipes] = useState<any>();
  const [saladRecipes, setSaladRecipes] = useState<any>();

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
      }}
    >
      {children}
    </LibContext.Provider>
  );
}

export { LibProvider, LibContext };
