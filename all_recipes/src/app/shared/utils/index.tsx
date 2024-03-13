import Link from "next/link";
import { QueryItemType } from "../types";

export const getProperImageUrl = (id: number, imageType: string) => {
  return `https://spoonacular.com/recipeImages/${id}-556x370.${imageType}`;
};

export const scrollToTop = () => {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const renderNavigationLinks = (data: any, typeOfQuery: string) => {
  if (!data) return;

  {
    return data.map((el: QueryItemType) => {
      return (
        <Link key={el.id} href={`/recipes?${typeOfQuery}=${el.id}`}>
          {el.name}
        </Link>
      );
    });
  }
};
