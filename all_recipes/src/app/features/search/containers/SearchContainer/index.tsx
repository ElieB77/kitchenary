"use client";
import SearchPage from "../../components/templates/SearchPage";
import { useRouter, useSearchParams } from "next/navigation";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "@/app/shared/constants";
import Card from "@/app/features/recipes/components/molecules/Card";
import { HEART_ICON } from "@/app/features/recipes/constants";
import { getProperImageUrl } from "@/app/shared/utils";
import useSearchBar from "../../hooks/useSearchBar";
import usePagination from "../../hooks/usePagination";
import SearchError from "../../components/molecules/SearchError";
import { useContext, useEffect } from "react";
import { LibContext } from "@/app/shared/context/LibContext";
import { RecipeType } from "@/app/features/recipes/types";
import { AccountContext } from "@/app/features/account/contexts/AccountContext";

const SearchPageContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { getRecipesBySearch, searchResults } = useContext(LibContext);
  const { addAndRemoveFavoriteRecipe, favoriteRecipeAlreadyExists } =
    useContext(AccountContext);
  const { handleChange, handleSubmit, searchValue } = useSearchBar();
  const {
    handlePagination,
    currentPageNumber,
    getTotalPages,
    getCurrentPageData,
  } = usePagination();

  useEffect(() => {
    getRecipesBySearch(query!);
  }, [query]);

  if (!searchResults) return null;

  const renderResults = () => {
    if (searchResults.length === 0) {
      return (
        <SearchError
          query={`"${query}"`}
          title={"No results found for"}
          message={""}
        />
      );
    }

    return getCurrentPageData(searchResults).map(
      (result: RecipeType, index: number) => {
        const { id, imageType, title } = result;
        console.log("$$$", favoriteRecipeAlreadyExists(id));
        return (
          <Card
            key={index}
            imageSrc={getProperImageUrl(id, imageType)}
            title={undefined!}
            subtitle={
              title.length > 50 ? title.substring(0, 50) + "..." : title
            }
            descriptionIcon={RIGHT_ARROW_ICON}
            hasLikeButton={true}
            secondaryColor={false}
            likeIcon={HEART_ICON}
            onClick={() => router.push(`/recipe/${id}`)}
            handleLikeBtnClick={(event: any) =>
              addAndRemoveFavoriteRecipe(event, title, id, imageType)
            }
            isSaved={favoriteRecipeAlreadyExists(id) ? true : false}
          />
        );
      }
    );
  };

  return (
    <>
      <SearchPage
        searchLabel={"search results for"}
        query={`"${query?.replaceAll("-", " ")}"`}
        placeholder={"Search"}
        searchBarIcon={SEARCH_ICON}
        onChange={handleChange}
        onSubmit={handleSubmit}
        cards={renderResults()}
        totalPages={getTotalPages(searchResults)}
        currentPage={currentPageNumber}
        content={undefined!}
        onClick={handlePagination}
        value={searchValue}
        type={"text"}
        autoFocus={true}
      />
    </>
  );
};

export default SearchPageContainer;
