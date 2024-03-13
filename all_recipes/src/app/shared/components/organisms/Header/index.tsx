import Image from "next/image";
import styles from "./styles.module.scss";
import {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ImageType, QueryItemType } from "@/app/shared/types";
import Logo, { LogoProps } from "../../atoms/Logo";
import Menu, { MenuProps } from "../Menu";
import SearchBar, {
  SearchBarProps,
} from "@/app/features/search/components/molecules/SearchBar";
import UserMenu, { UserMenuProps } from "../../molecules/UserMenu";
import { usePathname, useSearchParams } from "next/navigation";
import { CUISINES, MEALS, SEARCH_ICON } from "@/app/shared/constants";
import Link from "next/link";
import NavLinksDropdown from "../../molecules/NavLinksDropdown";
import { AuthContext } from "@/app/features/authentication/contexts/AuthContext";
import useSearchBar from "@/app/features/search/hooks/useSearchBar";

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
  searchBarIcon,
  loginText,
  registerText,
  loginLinkText,
  loginLinkHref,
  registerLinkText,
  registerLinkHref,
  onChange,
  onSubmit,
  value,
  type,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(AuthContext);
  const { handleChange, handleSubmit, searchValue } = useSearchBar();

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

  useEffect(() => {
    setIsOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__wrapper__logo}>
            <Logo text={text} to={to} larger={larger} />
          </div>
          <div className={styles.header__wrapper__searchBar__desktop}>
            <SearchBar
              placeholder={"Search"}
              searchBarIcon={SEARCH_ICON}
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={searchValue}
              type={"text"}
            />
          </div>
          <div className={styles.header__wrapper__right}>
            <div className={styles.header__wrapper__right__grouped}>
              <Image
                className={styles.header__wrapper__right__grouped__searchIcon}
                onClick={toggleMenu}
                {...searchIcon}
              />
              <div
                onClick={toggleUserMenu}
                className={styles.header__wrapper__right__grouped__user}
              >
                <Image {...userIcon} />
                <UserMenu
                  loginText={loginText}
                  registerText={registerText}
                  loginLinkText={loginLinkText}
                  loginLinkHref={loginLinkHref}
                  registerLinkText={registerLinkText}
                  registerLinkHref={registerLinkHref}
                  isUserMenuOpen={isUserMenuOpen}
                  setIsUserMenuOpen={setIsUserMenuOpen}
                />
              </div>
            </div>
            <div className={styles.header__wrapper__right__divider}></div>
            <Image
              className={styles.header__wrapper__right__hamburger}
              onClick={toggleMenu}
              {...hamburgerIcon}
            />
          </div>
        </div>
        <div className={styles.header__navLinks__desktop}>
          <NavLinksDropdown />
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
        searchBarIcon={searchBarIcon}
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
        type={type}
      />
    </>
  );
};

export default Header;
