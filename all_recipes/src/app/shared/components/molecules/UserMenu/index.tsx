import { FC, useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ebGaramond } from "@/app/(routes)/layout";
import { AuthContext } from "@/app/features/authentication/contexts/AuthContext";

export interface UserMenuProps {
  loginText: string;
  registerText: string;
  loginLinkText: string;
  loginLinkHref: string;
  registerLinkText: string;
  registerLinkHref: string;
  isUserMenuOpen?: boolean;
  setIsUserMenuOpen: any;
}

const UserMenu: FC<UserMenuProps> = ({
  loginText,
  registerText,
  loginLinkText,
  loginLinkHref,
  registerLinkText,
  registerLinkHref,
  isUserMenuOpen,
  setIsUserMenuOpen,
}) => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    isUserMenuOpen && (
      <div className={styles.userMenu}>
        {isLoggedIn ? (
          <div className={styles.userMenu__loggedIn}>
            <Link
              className={`${styles.userMenu__loggedIn__link} ${ebGaramond.className}`}
              href="/account/saved-items"
            >
              saved items
            </Link>
            <hr className={styles.userMenu__divider} />
            <Link
              className={`${styles.userMenu__loggedIn__link} ${ebGaramond.className}`}
              href="/account/informations"
            >
              personal informations
            </Link>
            <hr className={styles.userMenu__divider} />
            <Link
              className={`${styles.userMenu__loggedIn__link} ${ebGaramond.className}`}
              onClick={handleLogout}
              href="#"
            >
              log out
            </Link>
          </div>
        ) : (
          <>
            <div>
              <p className={`${ebGaramond.className} ${styles.userMenu__text}`}>
                {loginText}
              </p>
              <Link className={styles.userMenu__link} href={loginLinkHref}>
                {loginLinkText}
              </Link>
            </div>
            <hr className={styles.userMenu__divider} />
            <div>
              <p className={`${ebGaramond.className} ${styles.userMenu__text}`}>
                {registerText}
              </p>
              <Link className={styles.userMenu__link} href={registerLinkHref}>
                {registerLinkText}
              </Link>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default UserMenu;
