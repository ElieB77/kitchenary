import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SEARCH_ICON } from "@/app/shared/constants";
import { ImageType } from "@/app/shared/types";

export interface SearchBarProps {
  placeholder: string;
  searchBarIcon: ImageType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  type: string;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  searchBarIcon,
  onChange,
  onSubmit,
  value,
  type,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.searchBar}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Image {...searchBarIcon} />
    </form>
  );
};

export default SearchBar;
