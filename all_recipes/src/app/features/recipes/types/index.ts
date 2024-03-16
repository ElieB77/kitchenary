export type RecipeType = {
  title: string;
  id: number;
  imageType: string;
};

export type RecipeResultType = {
  number: number;
  results: RecipeType[];
};

export type IngredientsType = {
  original: string;
};

export type StepsType = {
  step: string;
};

export type NutrientsType = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

export type RecipeInformationsResultsType = {
  id: number;
  analyzedInstructions: {
    0: {
      steps: StepsType[];
    };
  };
  dishTypes: string[];
  extendedIngredients: IngredientsType[];
  nutrition: {
    nutrients: NutrientsType[];
  };
  title: string;
  servings: number;
  summary: string;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  imageType: string;
};

export type FavoriteRecipeType = {
  recipeId: number;
  recipeImageType: string;
  recipeTitle: string;
};
