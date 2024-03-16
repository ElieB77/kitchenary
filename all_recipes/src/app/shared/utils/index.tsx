import Link from "next/link";
import { NavLinkButtonsType, NavLinksType } from "../types";

export const getProperImageUrl = (id: number, imageType: string) => {
  return `https://spoonacular.com/recipeImages/${id}-556x370.${imageType}`;
};

export const scrollToTop = () => {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const renderNavigationLinks = (
  data: NavLinksType[],
  typeOfQuery: string
) => {
  if (!data) return;

  {
    return data.map((navLink: NavLinksType) => {
      return (
        <Link key={navLink.id} href={`/recipes?${typeOfQuery}=${navLink.id}`}>
          {navLink.name}
        </Link>
      );
    });
  }
};
