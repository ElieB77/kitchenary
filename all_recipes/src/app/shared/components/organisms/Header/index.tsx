import Image from "next/image";
import styles from "./styles.module.scss";
import { FC } from "react";
import { ephesis } from "@/app/(routes)/layout";
import { ImageType } from "@/app/shared/types";

interface HeaderProps {
  userIcon: ImageType;
  hamburgerIcon: ImageType;
  searchIcon: ImageType;
  logo: string;
}

const Header: FC<HeaderProps> = ({
  userIcon,
  searchIcon,
  hamburgerIcon,
  logo,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__wrapper__logo}>
          <h1 className={ephesis.className}>{logo}</h1>
        </div>
        <div className={styles.header__wrapper__right}>
          <div className={styles.header__wrapper__right__grouped}>
            <Image {...userIcon} />
            <Image {...searchIcon} />
          </div>
          <div className={styles.header__wrapper__right__divider}></div>
          <Image {...hamburgerIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
