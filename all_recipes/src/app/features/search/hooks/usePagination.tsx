import { LibContext } from "@/app/shared/context/LibContext";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const usePagination = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { getRecipesBySearch, searchResults } = useContext(LibContext);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(
    searchResults && searchResults.length / itemsPerPage
  );
  const startIndex = currentPageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageResults =
    searchResults && searchResults.slice(startIndex, endIndex);

  const handlePagination = (event: any) => {
    return setCurrentPageNumber(event.target.innerHTML - 1);
  };

  useEffect(() => {
    getRecipesBySearch(query);
    setCurrentPageNumber(0);
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPageNumber]);

  return {
    searchResults,
    currentPageResults,
    query,
    totalPages,
    handlePagination,
    currentPageNumber,
  };
};

export default usePagination;
