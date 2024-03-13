import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RecipeType } from "../../recipes/types";
import { scrollToTop } from "@/app/shared/utils";

const usePagination = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const itemsPerPage = 10;
  const startIndex = currentPageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getTotalPages = (recipesData: RecipeType[]) => {
    return Math.ceil(recipesData && recipesData.length / itemsPerPage);
  };

  const getCurrentPageData = (recipesData: RecipeType[]) => {
    return recipesData && recipesData.slice(startIndex, endIndex);
  };

  const handlePagination = (event: React.MouseEvent<HTMLButtonElement>) => {
    return setCurrentPageNumber(Number(event.currentTarget.innerHTML) - 1);
  };

  useEffect(() => {
    setCurrentPageNumber(0);
  }, [query]);

  useEffect(() => {
    scrollToTop();
  }, [currentPageNumber]);

  return {
    handlePagination,
    currentPageNumber,
    getTotalPages,
    getCurrentPageData,
  };
};

export default usePagination;
