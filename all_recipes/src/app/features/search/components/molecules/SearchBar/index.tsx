import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SEARCH_ICON } from "@/app/shared/constants";
import { ImageType } from "@/app/shared/types";

export interface SearchBarProps {
  placeholder: string;
  icon: ImageType;
  onChange: any;
  onSubmit: any;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  icon,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.searchBar}>
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <Image {...icon} />
    </form>
  );
};

export default SearchBar;
