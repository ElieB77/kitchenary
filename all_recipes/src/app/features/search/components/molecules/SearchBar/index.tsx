import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SEARCH_ICON } from "@/app/shared/constants";
import { ImageType } from "@/app/shared/types";

export interface SearchBarProps {
  placeholder: string;
  icon: ImageType;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, icon }) => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder={placeholder} />
      <Image {...icon} />
    </div>
  );
};

export default SearchBar;
