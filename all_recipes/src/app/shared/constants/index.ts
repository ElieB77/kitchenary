import { ImageType, QueryItemType } from "../types";

/*------------------
Images
------------------*/
export const SPLASH_IMG: ImageType = {
  src: "/images/splash.svg",
  alt: "Splash",
  width: 500,
  height: 500,
};

/*------------------
Icons
------------------*/
export const SEARCH_ICON: ImageType = {
  src: "/icons/search-icon.svg",
  alt: "Search icon",
  width: 20,
  height: 20,
};

export const HAMBURGER_ICON: ImageType = {
  src: "/icons/hamburger-icon.svg",
  alt: "Hamburger icon",
  width: 20,
  height: 20,
};

export const USER_ICON: ImageType = {
  src: "/icons/user-icon.svg",
  alt: "User icon",
  width: 20,
  height: 20,
};

export const RIGHT_ARROW_ICON: ImageType = {
  src: "/icons/right-arrow-icon.png",
  alt: "Right arrow icon",
  width: 20,
  height: 20,
};

export const LEFT_ARROW_ICON: ImageType = {
  src: "/icons/left-arrow-icon.png",
  alt: "Left arrow icon",
  width: 25,
  height: 25,
};

export const UP_ARROW_ICON: ImageType = {
  src: "/icons/up-arrow-icon.png",
  alt: "Up arrow icon",
  width: 25,
  height: 25,
};

export const CLOSE_ICON: ImageType = {
  src: "/icons/close-icon.svg",
  alt: "Close arrow icon",
  width: 20,
  height: 20,
};

/*--------------------------
Navigation Links Data
--------------------------*/
export const INGREDIENTS: QueryItemType[] = [
  { id: "chicken", name: "Chicken" },
  { id: "beef", name: "Beef" },
  { id: "pork", name: "Pork" },
  { id: "seafood", name: "Seafood" },
  { id: "pasta", name: "Pasta" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
];

export const MEALS: QueryItemType[] = [
  { id: "main-course", name: "Main Course" },
  { id: "side-dish", name: "Side Dish" },
  { id: "dessert", name: "Dessert" },
  { id: "appetizer", name: "Appetizer" },
  { id: "salad", name: "Salad" },
  { id: "bread", name: "Bread" },
  { id: "breakfast", name: "Breakfast" },
  { id: "soup", name: "Soup" },
  { id: "beverage", name: "Beverage" },
  { id: "sauce", name: "Sauce" },
  { id: "marinade", name: "Marinade" },
  { id: "fingerfood", name: "Finger Food" },
  { id: "snack", name: "Snack" },
  { id: "drink", name: "Drink" },
];

export const CUISINES: QueryItemType[] = [
  { id: "african", name: "African" },
  { id: "asian", name: "Asian" },
  { id: "american", name: "American" },
  { id: "british", name: "British" },
  { id: "cajun", name: "Cajun" },
  { id: "caribbean", name: "Caribbean" },
  { id: "chinese", name: "Chinese" },
  { id: "eastern-european", name: "Eastern European" },
  { id: "european", name: "European" },
  { id: "french", name: "French" },
  { id: "german", name: "German" },
  { id: "greek", name: "Greek" },
  { id: "indian", name: "Indian" },
  { id: "irish", name: "Irish" },
  { id: "italian", name: "Italian" },
  { id: "japanese", name: "Japanese" },
  { id: "jewish", name: "Jewish" },
  { id: "korean", name: "Korean" },
  { id: "latin-american", name: "Latin American" },
  { id: "mediterranean", name: "Mediterranean" },
  { id: "mexican", name: "Mexican" },
  { id: "nordic", name: "Nordic" },
  { id: "southern", name: "Southern" },
  { id: "spanish", name: "Spanish" },
  { id: "thai", name: "Thai" },
  { id: "vietnamese", name: "Vietnamese" },
];

export const DIETS: QueryItemType[] = [
  { id: "gluten-free", name: "Gluten-Free" },
  { id: "ketogenic", name: "Ketogenic" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "lacto-vegetarian", name: "Lacto-Vegetarian" },
  { id: "ovo-vegetarian", name: "Ovo-Vegetarian" },
  { id: "vegan", name: "Vegan" },
  { id: "pescetarian", name: "Pescetarian" },
  { id: "paleo", name: "Paleo" },
  { id: "primal", name: "Primal" },
  { id: "low-fodmap", name: "Low FODMAP" },
  { id: "whole30", name: "Whole30" },
];
