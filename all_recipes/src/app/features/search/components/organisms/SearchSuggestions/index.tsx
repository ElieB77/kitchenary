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
  icon,
  searchSuggestionsTabs,
  searchSuggestionsTitle,
  onChange,
  onSubmit,
  value,
}) => {
  return (
    <div className={styles.searchSuggestions}>
      <h1 className={ebGaramond.className}>{searchSuggestionsTitle}</h1>
      <div className={styles.searchSuggestions__tabs}>
        {searchSuggestionsTabs}
      </div>
      <SearchBar
        placeholder={placeholder}
        icon={icon}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
      />
    </div>
  );
};

export default SearchSuggestions;
