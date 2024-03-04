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
import * as DOMPurify from "dompurify";
import {
  FeaturedIngredientsType,
  FeaturedStepsType,
  NutrientsType,
} from "../../types";

interface RecipeContainerProps {
  recipeId: number;
}

const RecipeContainer: FC<RecipeContainerProps> = ({ recipeId }) => {
  const { getRecipeInformations, recipeInformations } = useContext(LibContext);

  useEffect(() => {
    getRecipeInformations(recipeId);
  }, [recipeId]);

  if (!recipeInformations) {
    return null;
  }

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

  const renderIngredientsList = extendedIngredients.map(
    (ingredient: FeaturedIngredientsType, index: number) => {
      return (
        <IngredientListItem key={index} ingredient={ingredient.original} />
      );
    }
  );

  const renderSteps = analyzedInstructions[0].steps.map(
    (step: FeaturedStepsType, index: number) => {
      return <Step key={index} stepText={step.step} />;
    }
  );

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
      totalTime={`${readyInMinutes}min`}
      preparationText={"preparation"}
      preparationTime={`${
        preparationMinutes !== -1
          ? `${preparationMinutes}'`
          : "time not available"
      }`}
      cookingText={"cooking"}
      cookingTime={`${
        cookingMinutes !== -1 ? `${cookingMinutes}'` : "time not available"
      }`}
      estimation={`(estimated approx. for ${servings} persons)`}
      servingsIcon={CUTLERY_ICON}
      servingsText={`${servings} persons`}
      ingredients={renderIngredientsList}
      steps={renderSteps}
      nutrientCards={renderNutrientCards}
    />
  );
};

export default RecipeContainer;
