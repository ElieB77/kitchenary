import RecipeContainer from "@/app/features/recipes/containers/RecipeContainer";

export default function Recipe({ params }: { params: { id: number } }) {
  return <RecipeContainer recipeId={params.id} />;
}
