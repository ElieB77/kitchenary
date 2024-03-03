"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import SearchBar from "../../molecules/SearchBar";
import { RIGHT_ARROW_ICON, SEARCH_ICON } from "@/app/shared/constants";
import { ebGaramond, montserrat } from "@/app/(routes)/layout";
import Card from "@/app/features/recipes/components/molecules/Card";
import { BURGER_IMG } from "@/app/features/recipes/constants";
import Cards from "@/app/features/recipes/components/organisms/Cards";

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__header}>
        <h2 className={montserrat.className}>
          Search Results for
          <p className={ebGaramond.className}> "pancakes"</p>
        </h2>
        <SearchBar placeholder={"Search"} icon={SEARCH_ICON} />
      </div>

      <div className={styles.searchPage__cards}>
        <Cards
          cards={
            <>
              <Card
                image={BURGER_IMG}
                title={"main course"}
                subtitle={"burgers"}
                descriptionIcon={RIGHT_ARROW_ICON}
                hasLikeButton={true}
              />
              <Card
                image={BURGER_IMG}
                title={"main course"}
                subtitle={"burgers"}
                descriptionIcon={RIGHT_ARROW_ICON}
                hasLikeButton={true}
              />
              <Card
                image={BURGER_IMG}
                title={"main course"}
                subtitle={"burgers"}
                descriptionIcon={RIGHT_ARROW_ICON}
                hasLikeButton={true}
              />
              <Card
                image={BURGER_IMG}
                title={"main course"}
                subtitle={"burgers"}
                descriptionIcon={RIGHT_ARROW_ICON}
                hasLikeButton={true}
              />
              <Card
                image={BURGER_IMG}
                title={"main course"}
                subtitle={"burgers"}
                descriptionIcon={RIGHT_ARROW_ICON}
                hasLikeButton={true}
              />
            </>
          }
          cardsBtnText={""}
          cardsBtnIcon={undefined}
          hasBtn={false}
        />
      </div>
    </div>
  );
};

export default SearchPage;
