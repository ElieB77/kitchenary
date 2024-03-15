import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ImageType } from "@/app/shared/types";

export interface SearchBarProps {
  placeholder: string;
  searchBarIcon: ImageType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  type: string;
  autoFocus?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  searchBarIcon,
  onChange,
  onSubmit,
  value,
  type,
  autoFocus,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.searchBar} ${autoFocus ? styles.autoFocus : ""}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        autoFocus={autoFocus}
      />
      <button type="submit">
        <Image {...searchBarIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
