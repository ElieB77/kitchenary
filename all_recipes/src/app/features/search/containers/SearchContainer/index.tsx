"use client";
import SearchPage from "../../components/templates/SearchPage";
import { useRouter } from "next/navigation";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "@/app/shared/constants";
import Card from "@/app/features/recipes/components/molecules/Card";
import { HEART_ICON } from "@/app/features/recipes/constants";
import { getProperImageUrl } from "@/app/shared/utils";
import useSearchBar from "../../hooks/useSearchBar";
import usePagination from "../../hooks/usePagination";
import ErrorPage from "@/app/shared/components/templates/ErrorPage";
import SearchError from "../../components/molecules/SearchError";

const SearchPageContainer = () => {
  const router = useRouter();
  const { handleChange, handleSubmit, searchValue } = useSearchBar();
  const {
    searchResults,
    query,
    currentPageResults,
    totalPages,
    handlePagination,
    currentPageNumber,
  } = usePagination();

  if (!searchResults)
    return (
      <ErrorPage
        status={"500"}
        message={
          "Oops! It looks like something went wrong on our end. Please try again later. We apologize for any inconvenience."
        }
        btnText={"Back to home page"}
        btnOnClick={() => router.push("/")}
      />
    );

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

    return currentPageResults.map((result: any, index: number) => {
      const { id, imageType, title } = result;
      return (
        <Card
          key={index}
          imageSrc={getProperImageUrl(id, imageType)}
          title={undefined!}
          subtitle={title}
          descriptionIcon={undefined!}
          hasLikeButton={true}
          secondaryColor={false}
          likeIcon={HEART_ICON}
          onClick={() => router.push(`/recipe/${id}`)}
        />
      );
    });
  };

  return (
    <>
      <SearchPage
        searchLabel={"search results for"}
        query={`"${query?.replaceAll("-", " ")}"`}
        placeholder={"Search"}
        icon={SEARCH_ICON}
        onChange={handleChange}
        onSubmit={handleSubmit}
        cards={renderResults()}
        cardsBtnText={""}
        cardsBtnIcon={RIGHT_ARROW_ICON}
        hasBtn={false}
        totalPages={totalPages}
        currentPage={currentPageNumber}
        content={undefined!}
        onClick={handlePagination}
        value={searchValue}
      />
    </>
  );
};

export default SearchPageContainer;
