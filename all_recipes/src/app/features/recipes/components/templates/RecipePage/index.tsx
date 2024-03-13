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

interface RecipePageProps
  extends ShareButtonProps,
    LikeButtonProps,
    RecipeTimeProps,
    IngredientsProps,
    RecipeStepsProps,
    CardsNutrientProps {
  recipeType: string;
  recipeTitle: string;
  recipeImage: string;
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
  handleLikeBtnClick,
  isSaved,
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
          <Image src={recipeImage} alt={""} fill />
        </div>

        <div className={styles.recipePage__top__buttons}>
          <LikeButton
            secondaryColor={secondaryColor}
            likeIcon={likeIcon}
            handleLikeBtnClick={handleLikeBtnClick}
            isSaved={isSaved}
          />
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
        <p dangerouslySetInnerHTML={{ __html: summaryText }} />
      </div>

      <div className={styles.recipePage__ingredients}>
        <div>
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
        <div className={styles.recipePage__nutritionFacts__desktop}>
          <h3 className={styles.recipePage__nutritionFacts__desktop__title}>
            {nutritionTitle}
          </h3>
          <CardsNutrient nutrientCards={nutrientCards} />
        </div>
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
