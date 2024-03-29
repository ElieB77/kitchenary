"use client";
import { FC, useContext, useEffect, useState } from "react";
import RecipePage from "../../components/templates/RecipePage";
import { LibContext } from "@/app/shared/context/LibContext";
import { getProperImageUrl } from "@/app/shared/utils";
import {
  CUTLERY_ICON,
  HEART_ICON,
  HOURGLASS_ICON,
  NUTRIENT_NAMES,
  PAUSE_ICON,
  RESET_ICON,
  SHARE_ICON,
  TIME_ICON,
  XMARK_ICON,
} from "../../constants";
import IngredientListItem from "../../components/atoms/IngredientListItem";
import Step from "../../components/atoms/Step";
import CardNutrient from "../../components/molecules/CardNutrient";
import DOMPurify from "dompurify";
import { IngredientsType, StepsType, NutrientsType } from "../../types";
import { AccountContext } from "@/app/features/account/contexts/AccountContext";
import { getHoursAndMinutes } from "../../utils";
import { useCountdown } from "../../hooks/useCountdown";

interface RecipeContainerProps {
  recipeId: string;
}

const RecipeContainer: FC<RecipeContainerProps> = ({ recipeId }) => {
  const { getRecipeInformations, recipeInformations } = useContext(LibContext);
  const {
    countdown,
    toggleCountdown,
    isRunning,
    pauseAndPlayCountdown,
    closeCountdown,
    resetCountdown,
    isCountdownOpen,
  } = useCountdown(recipeInformations?.readyInMinutes!);
  const { addAndRemoveFavoriteRecipe, favoriteRecipeAlreadyExists } =
    useContext(AccountContext);
  const [checkedSteps, setCheckedSteps] = useState<String[]>([]);

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

  const handleCheckedSteps = (step: string) => {
    setCheckedSteps((prev) => {
      if (prev.includes(step)) {
        return prev.filter((s) => s !== step);
      } else {
        return [...prev, step];
      }
    });
  };

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
      return (
        <Step
          key={index}
          stepText={step.step}
          handleStepClick={() => handleCheckedSteps(step.step)}
          isChecked={checkedSteps.includes(step.step)}
        />
      );
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
          ? `${getHoursAndMinutes(cookingMinutes)}`
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
      xmarkIcon={XMARK_ICON}
      pauseIcon={PAUSE_ICON}
      resetIcon={RESET_ICON}
      hours={countdown.hours.toString().padStart(2, "0")}
      minutes={countdown.minutes.toString().padStart(2, "0")}
      seconds={countdown.seconds.toString().padStart(2, "0")}
      isTimerModalOpen={isCountdownOpen}
      timerOnPause={pauseAndPlayCountdown}
      timerOnReset={resetCountdown}
      timerOnClose={closeCountdown}
      isRunning={isRunning}
      completedSteps={checkedSteps.length.toString()}
      totalSteps={analyzedInstructions[0]?.steps.length.toString()}
      btnText={"Start"}
      btnOnClick={toggleCountdown}
      btnIcon={HOURGLASS_ICON}
      textSteps={"steps completed"}
    />
  );
};

export default RecipeContainer;
