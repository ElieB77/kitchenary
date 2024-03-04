export type FeaturedRecipeType = {
  title: string;
  number: number;
  id: number;
  imageType: string;
};

export type FeaturedIngredientsType = {
  original: string;
};

export type FeaturedStepsType = {
  step: string;
};

export type NutrientsType = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};
