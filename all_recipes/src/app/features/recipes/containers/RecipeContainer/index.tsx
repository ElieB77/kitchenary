"use client";
import { FC, useContext, useEffect } from "react";
import RecipePage from "../../components/templates/RecipePage";
import { LibContext } from "@/app/shared/context/LibContext";
import { getProperImageUrl } from "@/app/shared/utils";
import {
  CUTLERY_ICON,
  HEART_ICON,
  NUTRIENT_NAMES,
  SHARE_ICON,
  TIME_ICON,
} from "../../constants";
import IngredientListItem from "../../components/atoms/IngredientListItem";
import Step from "../../components/atoms/Step";
import CardNutrient from "../../components/molecules/CardNutrient";
import DOMPurify from "dompurify";
import { IngredientsType, StepsType, NutrientsType } from "../../types";
import { AccountContext } from "@/app/features/account/contexts/AccountContext";
import { getHoursAndMinutes } from "../../utils";

interface RecipeContainerProps {
  recipeId: string;
}

const RecipeContainer: FC<RecipeContainerProps> = ({ recipeId }) => {
  const { getRecipeInformations, recipeInformations } = useContext(LibContext);
  const { addAndRemoveFavoriteRecipe, favoriteRecipeAlreadyExists } =
    useContext(AccountContext);

  useEffect(() => {
    getRecipeInformations(recipeId);
  }, [recipeId]);

  if (!recipeInformations) return null;

  const {
    title,
    id,
    imageType,
    dishTypes,
    servings,
    summary,
    readyInMinutes,
    cookingMinutes,
    preparationMinutes,
    extendedIngredients,
    analyzedInstructions,
    nutrition,
  } = recipeInformations;

  const renderSanitizedSummary = DOMPurify.sanitize(summary, {
    ALLOWED_TAGS: ["p", "i", "em", "a"],
  });

  const renderIngredientsList =
    extendedIngredients.map((ingredient: IngredientsType, index: number) => {
      return (
        <IngredientListItem key={index} ingredient={ingredient.original} />
      );
    }) || "Not available";

  const renderSteps =
    analyzedInstructions[0]?.steps.map((step: StepsType, index: number) => {
      return <Step key={index} stepText={step.step} />;
    }) || "Not available";

  const renderNutrientCards = nutrition.nutrients
    .filter((nutrient: NutrientsType) => NUTRIENT_NAMES.includes(nutrient.name))
    .map((nutrient: NutrientsType, index: number) => {
      return (
        <CardNutrient
          key={index}
          nutrientName={
            nutrient.name === "Carbohydrates" ? "Carbs" : nutrient.name
          }
          nutrientAmount={Math.round(nutrient.amount)}
          nutrientUnit={nutrient.unit}
          nutrientPercent={Math.round(nutrient.percentOfDailyNeeds) + "%"}
        />
      );
    });

  return (
    <RecipePage
      recipeType={dishTypes[0]}
      recipeTitle={title}
      recipeImage={getProperImageUrl(id, imageType)}
      summaryTitleFirstWord={"the"}
      summaryTitleSecondWord={"overview"}
      summaryText={renderSanitizedSummary}
      ingredientsTitleFirstWord={"the"}
      ingredientsTitleSecondWord={"ingredients"}
      stepsTitleFirstWord={"the"}
      stepsTitleSecondWord={"steps"}
      nutritionTitle={"nutrition facts"}
      shareIcon={SHARE_ICON}
      secondaryColor={true}
      likeIcon={HEART_ICON}
      totalTimeIcon={TIME_ICON}
      totalTime={getHoursAndMinutes(readyInMinutes)}
      preparationText={"preparation"}
      preparationTime={`${
        preparationMinutes !== -1
          ? `${preparationMinutes}'`
          : "time not available"
      }`}
      cookingText={"cooking"}
      cookingTime={`${
        cookingMinutes !== -1
          ? `${getHoursAndMinutes(cookingMinutes)}'`
          : "time not available"
      }`}
      estimation={`(estimated approx. for ${servings} persons)`}
      servingsIcon={CUTLERY_ICON}
      servingsText={`${servings} persons`}
      ingredients={renderIngredientsList}
      steps={renderSteps}
      nutrientCards={renderNutrientCards}
      handleLikeBtnClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        addAndRemoveFavoriteRecipe(event, title, id, imageType)
      }
      isSaved={favoriteRecipeAlreadyExists(id) ? true : false}
    />
  );
};

export default RecipeContainer;
