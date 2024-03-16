import {
  BROWNIES_IMG,
  BURGER_IMG,
  COOKIE_IMG,
  COUSCOUS_IMG,
  HOT_WINGS_IMG,
  MAC_AND_CHEESE_IMG,
  NOODLES_IMG,
  PASTA_IMG,
  SALAD_IMG,
  SMOOTHIE_IMG,
  SOUP_IMG,
} from "@/app/features/recipes/constants";
import {
  ImageType,
  NavLinkButtonsType,
  NavLinksType,
  PopularCardsType,
  RoundedCardsType,
} from "../types";

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

export const ERROR_ICON: ImageType = {
  src: "/icons/error-icon.png",
  alt: "Error icon",
  width: 25,
  height: 25,
};

export const INFO_ICON: ImageType = {
  src: "/icons/info-icon.png",
  alt: "Info icon",
  width: 25,
  height: 25,
};

export const TRASH_ICON: ImageType = {
  src: "/icons/trash-icon.png",
  alt: "Trash icon",
  width: 20,
  height: 20,
};

/*--------------------------
Navigation
--------------------------*/
export const INGREDIENTS: NavLinksType[] = [
  { id: "chicken", name: "Chicken" },
  { id: "beef", name: "Beef" },
  { id: "pork", name: "Pork" },
  { id: "seafood", name: "Seafood" },
  { id: "pasta", name: "Pasta" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
];

export const MEALS: NavLinksType[] = [
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

export const CUISINES: NavLinksType[] = [
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

export const DIETS: NavLinksType[] = [
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

export const NAV_DROPDOWN_BTN: NavLinkButtonsType[] = [
  {
    name: "meals",
    id: 0,
  },
  {
    name: "cuisines",
    id: 1,
  },
  {
    name: "ingredients",
    id: 2,
  },
  {
    name: "diets",
    id: 3,
  },
];

/*----------------------------------------
Cards
----------------------------------------*/

export const ROUNDED_CARDS: RoundedCardsType[] = [
  {
    id: 1,
    image: SMOOTHIE_IMG,
    title: "smoothies",
    navigateTo: "/featured/smoothie",
  },
  {
    id: 2,
    image: BURGER_IMG,
    title: "burgers",
    navigateTo: "/featured/burger",
  },
  {
    id: 3,
    image: PASTA_IMG,
    title: "pastas",
    navigateTo: "/featured/pasta",
  },
  {
    id: 4,
    image: COOKIE_IMG,
    title: "cookies",
    navigateTo: "/featured/cookie",
  },
  {
    id: 5,
    image: SALAD_IMG,
    title: "salads",
    navigateTo: "/featured/salad",
  },
];

export const POPULAR_CARDS: PopularCardsType[] = [
  {
    id: 1,
    imageSrc: MAC_AND_CHEESE_IMG.src,
    title: "main course",
    subtitle: "mac & cheese",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=mac-and-cheese",
  },
  {
    id: 2,
    imageSrc: HOT_WINGS_IMG.src,
    title: "fingerfood",
    subtitle: "hot wings",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=hot-wings",
  },
  {
    id: 3,
    imageSrc: NOODLES_IMG.src,
    title: "main course",
    subtitle: "chicken noodles",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=chicken-noodles",
  },
  {
    id: 4,
    imageSrc: BROWNIES_IMG.src,
    title: "dessert",
    subtitle: "peanut butter brownies",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=peanut-butter-brownies",
  },
  {
    id: 5,
    imageSrc: SOUP_IMG.src,
    title: "soup",
    subtitle: "mushroom soup",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=mushroom-soup",
  },
  {
    id: 6,
    imageSrc: COUSCOUS_IMG.src,
    title: "main course",
    subtitle: "couscous",
    descriptionIcon: RIGHT_ARROW_ICON,
    navigateTo: "/recipes?query=couscous",
  },
];
