"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface LibContextState {
  pancakeRecipes: any;
}

const LibContext = createContext<LibContextState>({
  pancakeRecipes: undefined,
});

function LibProvider({ children }: { children: React.ReactNode }) {
  const [pancakeRecipes, setPancakeRecipes] = useState<any>();

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
        // getRecipe(
        //   "/complexSearch?query=chocolate&type=dessert",
        //   setChocolateRecipe
        // ),
        // getRecipe("/random?number=6", setRandomRecipe),
      ]);
    };

    getAllRecipes();
  }, []);

  return (
    <LibContext.Provider
      value={{
        pancakeRecipes,
      }}
    >
      {children}
    </LibContext.Provider>
  );
}

export { LibProvider, LibContext };
