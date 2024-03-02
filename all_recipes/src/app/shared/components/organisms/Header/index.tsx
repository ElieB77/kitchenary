import Image from "next/image";
import styles from "./styles.module.scss";
import { FC, useState } from "react";
import { ImageType } from "@/app/shared/types";
import Menu from "../../templates/Menu";
import Logo, { LogoProps } from "../../atoms/Logo";

interface HeaderProps extends LogoProps {
  userIcon: ImageType;
  hamburgerIcon: ImageType;
  searchIcon: ImageType;
}

const Header: FC<HeaderProps> = ({
  userIcon,
  searchIcon,
  hamburgerIcon,
  text,
  to,
  larger,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__wrapper__logo}>
            <Logo text={text} to={to} larger={larger} />
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
