import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ERROR_ICON } from "@/app/shared/constants";

interface SearchErrorProps {
  query: string | null;
  title: string;
  message: string;
}

const SearchError: FC<SearchErrorProps> = ({ query, title, message }) => {
  return (
    <div className={styles.searchError}>
      <Image {...ERROR_ICON} />
      <h2>
        {title} <span>{query}</span>
      </h2>
      <p>Please try refining your search for better results.</p>
    </div>
  );
};

export default SearchError;
