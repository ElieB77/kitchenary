import { FC } from "react";
import SearchBar, { SearchBarProps } from "../../molecules/SearchBar";
import styles from "./styles.module.scss";
import Title, { TitleProps } from "@/app/shared/components/atoms/Title";

interface SearchSuggestionsProps extends SearchBarProps, TitleProps {
  tabs: any;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({
  placeholder,
  icon,
  firstWord,
  secondWord,
  tabs,
}) => {
  return (
    <div className={styles.searchSuggestions}>
      <Title firstWord={firstWord} secondWord={secondWord} />
      <div className={styles.searchSuggestions__tabs}>{tabs}</div>
      <SearchBar placeholder={placeholder} icon={icon} />
    </div>
  );
};

export default SearchSuggestions;
