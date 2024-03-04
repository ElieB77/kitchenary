"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";
import Image from "next/image";
import LikeButton, { LikeButtonProps } from "../../atoms/LikeButton";
import ShareButton, { ShareButtonProps } from "../../atoms/ShareButton";
import RecipeTitle from "../../atoms/RecipeTitle";
import RecipeTime, { RecipeTimeProps } from "../../molecules/RecipeTime";
import Ingredients, { IngredientsProps } from "../../organisms/Ingredients";
import RecipeSteps, { RecipeStepsProps } from "../../organisms/RecipeSteps";
import CardsNutrient, {
  CardsNutrientProps,
} from "../../organisms/CardsNutrient";
import { ImageType } from "@/app/shared/types";

interface RecipePageProps
  extends ShareButtonProps,
    LikeButtonProps,
    RecipeTimeProps,
    IngredientsProps,
    RecipeStepsProps,
    CardsNutrientProps {
  recipeType: string;
  recipeTitle: string;
  recipeImage: ImageType;
  summaryTitleFirstWord: string;
  summaryTitleSecondWord: string;
  summaryText: string;
  ingredientsTitleFirstWord: string;
  ingredientsTitleSecondWord: string;
  stepsTitleFirstWord: string;
  stepsTitleSecondWord: string;
  nutritionTitle: string;
}

const RecipePage: FC<RecipePageProps> = ({
  recipeType,
  recipeTitle,
  recipeImage,
  shareIcon,
  secondaryColor,
  totalTimeIcon,
  totalTime,
  preparationText,
  preparationTime,
  cookingText,
  cookingTime,
  estimation,
  likeIcon,
  summaryTitleFirstWord,
  summaryTitleSecondWord,
  summaryText,
  ingredientsTitleFirstWord,
  ingredientsTitleSecondWord,
  servingsIcon,
  servingsText,
  ingredients,
  stepsTitleFirstWord,
  stepsTitleSecondWord,
  steps,
  nutritionTitle,
  nutrientCards,
}) => {
  return (
    <div className={styles.recipePage}>
      <div className={styles.recipePage__top}>
        <div className={styles.recipePage__top__header}>
          <p
            className={`${ebGaramond.className} ${styles.recipePage__top__header__type}`}
          >
            {recipeType}
          </p>
          <h1 className={styles.recipePage__top__header__title}>
            {recipeTitle}
          </h1>
        </div>

        <div className={styles.recipePage__top__image}>
          <Image {...recipeImage} />
        </div>

        <div className={styles.recipePage__top__buttons}>
          <LikeButton secondaryColor={secondaryColor} likeIcon={likeIcon} />
          <ShareButton shareIcon={shareIcon} />
        </div>

        <div className={styles.recipePage__top__time}>
          <RecipeTime
            totalTimeIcon={totalTimeIcon}
            totalTime={totalTime}
            preparationText={preparationText}
            preparationTime={preparationTime}
            cookingText={cookingText}
            cookingTime={cookingTime}
            estimation={estimation}
          />
        </div>
      </div>

      <div className={styles.recipePage__summary}>
        <RecipeTitle
          firstWord={summaryTitleFirstWord}
          secondWord={summaryTitleSecondWord}
        />
        <p>{summaryText}</p>
      </div>

      <div className={styles.recipePage__ingredients}>
        <RecipeTitle
          firstWord={ingredientsTitleFirstWord}
          secondWord={ingredientsTitleSecondWord}
        />
        <Ingredients
          servingsIcon={servingsIcon}
          servingsText={servingsText}
          ingredients={ingredients}
        />
      </div>

      <div className={styles.recipePage__steps}>
        <RecipeTitle
          firstWord={stepsTitleFirstWord}
          secondWord={stepsTitleSecondWord}
        />
        <RecipeSteps steps={steps} />
      </div>

      <div className={styles.recipePage__nutritionFacts}>
        <h3 className={styles.recipePage__nutritionFacts__title}>
          {nutritionTitle}
        </h3>
        <CardsNutrient nutrientCards={nutrientCards} />
      </div>
    </div>
  );
};

export default RecipePage;
