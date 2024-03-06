export type RecipeType = {
  title: string;
  number: number;
  id: number;
  imageType: string;
};

export type RecipeResponseType = {
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
