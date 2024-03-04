export const getProperImageUrl = (id: number, imageType: string) => {
  return `https://spoonacular.com/recipeImages/${id}-556x370.${imageType}`;
};
