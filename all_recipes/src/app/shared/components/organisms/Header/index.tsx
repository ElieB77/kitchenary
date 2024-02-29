import Image from "next/image";
import styles from "./styles.module.scss";
import { FC, useState } from "react";
import { ephesis } from "@/app/(routes)/layout";
import { ImageType } from "@/app/shared/types";
import Link from "next/link";
import Menu from "../../templates/Menu";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__wrapper__logo}>
            <Link href={"/"}>
              <h1 className={ephesis.className}>{logo}</h1>
            </Link>
          </div>
          <div className={styles.header__wrapper__right}>
            <div className={styles.header__wrapper__right__grouped}>
              <Image {...userIcon} />
              <Image {...searchIcon} />
            </div>
            <div className={styles.header__wrapper__right__divider}></div>
            <Image onClick={() => setIsOpen(!isOpen)} {...hamburgerIcon} />
          </div>
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
};

export default Header;
