"use client";
import { useContext, useEffect } from "react";
import SearchPage from "../../components/templates/SearchPage";
import { LibContext } from "@/app/shared/context/LibContext";
import { useSearchParams } from "next/navigation";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "@/app/shared/constants";
import Card from "@/app/features/recipes/components/molecules/Card";
import { BURGER_IMG, HEART_ICON } from "@/app/features/recipes/constants";
import { getProperImageUrl } from "@/app/shared/utils";
import useSearchBar from "../../hooks/useSearchBar";

const SearchPageContainer = () => {
  const searchParams = useSearchParams();
  const { getRecipesBySearch, searchResults } = useContext(LibContext);
  const { handleChange, handleSubmit } = useSearchBar();
  const query = searchParams.get("query");
  console.log("$$", searchResults);

  useEffect(() => {
    getRecipesBySearch(query);
  }, [query]);

  if (!searchResults) return <p>OOps something went wrong!</p>;

  const renderResults = () => {
    return searchResults.map((result: any, index: number) => {
      return (
        <Card
          imageSrc={getProperImageUrl(result.id, result.imageType)}
          title={undefined!}
          subtitle={result.title}
          descriptionIcon={undefined!}
          hasLikeButton={true}
          secondaryColor={false}
          likeIcon={HEART_ICON}
        />
      );
    });
  };

  return (
    <SearchPage
      searchLabel={"search results for"}
      query={`"${query}"`}
      placeholder={"Search.."}
      icon={SEARCH_ICON}
      onChange={handleChange}
      onSubmit={handleSubmit}
      cards={renderResults()}
      cardsBtnText={""}
      cardsBtnIcon={undefined!}
      hasBtn={false}
    />
  );
};

export default SearchPageContainer;
