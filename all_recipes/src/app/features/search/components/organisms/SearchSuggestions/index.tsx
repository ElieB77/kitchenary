import { FC } from "react";
import SearchBar, { SearchBarProps } from "../../molecules/SearchBar";
import styles from "./styles.module.scss";
import { ebGaramond } from "@/app/(routes)/layout";

export interface SearchSuggestionsProps extends SearchBarProps {
  searchSuggestionsTabs: JSX.Element[];
  searchSuggestionsTitle: string;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({
  placeholder,
  searchBarIcon,
  searchSuggestionsTabs,
  searchSuggestionsTitle,
  onChange,
  onSubmit,
  value,
  type,
}) => {
  return (
    <div className={styles.searchSuggestions}>
      <h1 className={ebGaramond.className}>{searchSuggestionsTitle}</h1>
      <div className={styles.searchSuggestions__tabs}>
        {searchSuggestionsTabs}
      </div>
      <SearchBar
        placeholder={placeholder}
        searchBarIcon={searchBarIcon}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        type={type}
      />
    </div>
  );
};

export default SearchSuggestions;
