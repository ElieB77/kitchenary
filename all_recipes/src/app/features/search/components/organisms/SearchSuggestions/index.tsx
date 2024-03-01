import { FC } from "react";
import SearchBar, { SearchBarProps } from "../../molecules/SearchBar";
import styles from "./styles.module.scss";
import Title, { TitleProps } from "@/app/shared/components/atoms/Title";
import { ebGaramond } from "@/app/(routes)/layout";

interface SearchSuggestionsProps extends SearchBarProps {
  tabs: any;
  title: string;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({
  placeholder,
  icon,
  tabs,
  title,
}) => {
  return (
    <div className={styles.searchSuggestions}>
      <h1 className={ebGaramond.className}>{title}</h1>
      <div className={styles.searchSuggestions__tabs}>{tabs}</div>
      <SearchBar placeholder={placeholder} icon={icon} />
    </div>
  );
};

export default SearchSuggestions;
