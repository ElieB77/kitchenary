import {
  CUISINES,
  DIETS,
  INGREDIENTS,
  MEALS,
  NAV_DROPDOWN_BTN,
} from "@/app/shared/constants";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { renderNavigationLinks } from "@/app/shared/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { NavLinkButtonsType } from "@/app/shared/types";

const NavLinksDropdown = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  let timeout: ReturnType<typeof setTimeout>;

  const toggleDropdown = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const closeDropdown = () => {
    timeout = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const cancelClose = () => {
    clearTimeout(timeout);
  };

  useEffect(() => {
    setOpenMenu(null);
  }, [searchParams, pathname]);

  return (
    <div className={styles.navLinksDesktop}>
      <div className={styles.navLinksDesktop__buttons}>
        {NAV_DROPDOWN_BTN.map((button: NavLinkButtonsType) => {
          return (
            <button
              key={button.id}
              onMouseEnter={() => {
                toggleDropdown(button.name);
                cancelClose();
              }}
              onMouseLeave={closeDropdown}
            >
              {button.name}
            </button>
          );
        })}
      </div>

      <div
        onMouseEnter={cancelClose}
        onMouseLeave={closeDropdown}
        className={`${styles.navLinksDesktop__meals} ${
          openMenu === "meals" ? styles.show : ""
        }`}
      >
        {renderNavigationLinks(MEALS, "type")}
      </div>

      <div
        onMouseEnter={cancelClose}
        onMouseLeave={closeDropdown}
        className={`${styles.navLinksDesktop__cuisines} ${
          openMenu === "cuisines" ? styles.show : ""
        }`}
      >
        {renderNavigationLinks(CUISINES, "cuisine")}
      </div>

      <div
        onMouseEnter={cancelClose}
        onMouseLeave={closeDropdown}
        className={`${styles.navLinksDesktop__ingredients} ${
          openMenu === "ingredients" ? styles.show : ""
        }`}
      >
        {renderNavigationLinks(INGREDIENTS, "includeIngredients")}
      </div>

      <div
        onMouseEnter={cancelClose}
        onMouseLeave={closeDropdown}
        className={`${styles.navLinksDesktop__diets} ${
          openMenu === "diets" ? styles.show : ""
        }`}
      >
        {renderNavigationLinks(DIETS, "diet")}
      </div>
    </div>
  );
};

export default NavLinksDropdown;
