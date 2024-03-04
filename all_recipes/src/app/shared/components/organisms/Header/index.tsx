import Image from "next/image";
import styles from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import { ImageType } from "@/app/shared/types";
import Logo, { LogoProps } from "../../atoms/Logo";
import Menu, { MenuProps } from "../Menu";
import { SearchBarProps } from "@/app/features/search/components/molecules/SearchBar";
import UserMenu, { UserMenuProps } from "../../molecules/UserMenu";

interface HeaderProps
  extends LogoProps,
    MenuProps,
    SearchBarProps,
    UserMenuProps {
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
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  meals,
  cuisines,
  ingredients,
  diets,
  placeholder,
  icon,
  loginText,
  registerText,
  loginLinkText,
  loginLinkHref,
  registerLinkText,
  registerLinkHref,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      setIsUserMenuOpen(false);
    } else {
      document.documentElement.style.overflow = "visible";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    return setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    if (isOpen) setIsOpen(false);
    return setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__wrapper__logo}>
            <Logo text={text} to={to} larger={larger} />
          </div>
          <div className={styles.header__wrapper__right}>
            <div className={styles.header__wrapper__right__grouped}>
              <Image onClick={toggleUserMenu} {...userIcon} />
              <Image onClick={toggleMenu} {...searchIcon} />
            </div>
            <div className={styles.header__wrapper__right__divider}></div>
            <Image onClick={toggleMenu} {...hamburgerIcon} />
          </div>
        </div>
      </div>
      <Menu
        isOpen={isOpen}
        firstTitle={firstTitle}
        secondTitle={secondTitle}
        thirdTitle={thirdTitle}
        fourthTitle={fourthTitle}
        meals={meals}
        cuisines={cuisines}
        ingredients={ingredients}
        diets={diets}
        placeholder={placeholder}
        icon={icon}
      />
      <UserMenu
        loginText={loginText}
        registerText={registerText}
        loginLinkText={loginLinkText}
        loginLinkHref={loginLinkHref}
        registerLinkText={registerLinkText}
        registerLinkHref={registerLinkHref}
        isUserMenuOpen={isUserMenuOpen}
      />
    </>
  );
};

export default Header;
