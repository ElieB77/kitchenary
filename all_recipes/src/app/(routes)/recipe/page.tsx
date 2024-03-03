"use client";
import RecipeIngredientListItem from "@/app/features/recipes/components/atoms/RecipeIngredientListItem";
import RecipeStep from "@/app/features/recipes/components/atoms/RecipeStep";
import CardNutrient from "@/app/features/recipes/components/molecules/CardNutrient";
import RecipePage from "@/app/features/recipes/components/templates/RecipePage";
import {
  CUTLERY_ICON,
  HEART_ICON,
  SHARE_ICON,
  SOUP_IMG,
  TIME_ICON,
} from "@/app/features/recipes/constants";

export default function Recipe() {
  return (
    <>
      <RecipePage
        recipeType={"main course"}
        recipeTitle={"mushroom soup"}
        recipeImage={SOUP_IMG}
        summaryTitleFirstWord={"the"}
        summaryTitleSecondWord={"summary"}
        summaryText={
          "Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for. For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. This hor d'oeuvre has 221 calories, 10g of protein, and 8g of fat per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around 15 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Users who liked this recipe also liked Turkey Tomato Pizza, Tomato Cheese Pizza, and Cheese & Tomato Pizza."
        }
        ingredientsTitleFirstWord={"the"}
        ingredientsTitleSecondWord={"ingredients"}
        stepsTitleFirstWord={"the"}
        stepsTitleSecondWord={"steps"}
        nutritionTitle={"nutrition facts"}
        shareIcon={SHARE_ICON}
        secondaryColor={true}
        likeIcon={HEART_ICON}
        totalTimeIcon={TIME_ICON}
        totalTime={"1hr"}
        preparationText={"preparation"}
        preparationTime={"30'"}
        cookingText={"cooking"}
        cookingTime={"30'"}
        estimation={"(estimated approx. for 4 persons)"}
        servingsIcon={CUTLERY_ICON}
        servingsText={"4 persons"}
        ingredients={
          <>
            <RecipeIngredientListItem amount={"300g"} ingredientName={"Beef"} />
            <RecipeIngredientListItem amount={"300g"} ingredientName={"Beef"} />
            <RecipeIngredientListItem amount={"300g"} ingredientName={"Beef"} />
          </>
        }
        steps={
          <>
            <RecipeStep
              stepText={
                "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top."
              }
            />
            <RecipeStep
              stepText={
                "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top."
              }
            />
            <RecipeStep
              stepText={
                "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top."
              }
            />
          </>
        }
        nutrientCards={
          <>
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
            <CardNutrient
              nutrientName={"calories"}
              nutrientAmount={"500"}
              nutrientUnit={"kcal"}
              nutrientPercent={"6%"}
            />
          </>
        }
      />
    </>
  );
}
