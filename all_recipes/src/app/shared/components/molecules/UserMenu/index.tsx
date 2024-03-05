import { FC, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ebGaramond } from "@/app/(routes)/layout";

export interface UserMenuProps {
  loginText: string;
  registerText: string;
  loginLinkText: string;
  loginLinkHref: string;
  registerLinkText: string;
  registerLinkHref: string;
  isUserMenuOpen?: boolean;
}

const UserMenu: FC<UserMenuProps> = ({
  loginText,
  registerText,
  loginLinkText,
  loginLinkHref,
  registerLinkText,
  registerLinkHref,
  isUserMenuOpen,
}) => {
  return (
    isUserMenuOpen && (
      <div className={styles.userMenu}>
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
      </div>
    )
  );
};

export default UserMenu;
