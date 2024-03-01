"use client";
import {
  CUISINES,
  DIETS,
  INGREDIENTS,
  MEALS,
  NAV_LINKS,
  RIGHT_ARROW_ICON,
} from "@/app/shared/constants";
import NavLink from "../../atoms/NavLink";
import styles from "./styles.module.scss";
import "@/app/shared/styles/main.scss";
import { FC, useEffect, useState } from "react";
import { animate, stagger, motion } from "framer-motion";
import NavLinkExtended from "../../organisms/NavLinkExtended";

interface MenuProps {
  navLinks?: any;
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ navLinks, isOpen }) => {
  const staggerList = stagger(0.1, { startDelay: 0.5 });
  const [extendNavLink, setExtendNavLink] = useState<boolean>(false);
  const [selectedNavLink, setSelectedNavLink] = useState<any>("");

  const handleExtendedNavLinks = (link: string) => {
    setExtendNavLink(true);
    setSelectedNavLink(link);
  };

  const extendedLink =
    selectedNavLink === "cuisines"
      ? CUISINES
      : selectedNavLink === "diets"
      ? DIETS
      : selectedNavLink === "meals"
      ? MEALS
      : selectedNavLink === "ingredients"
      ? INGREDIENTS
      : "";

  useEffect(() => {
    animate(
      "li",
      { x: [-100, 0], opacity: [0, 1] },
      { type: "tween", delay: staggerList }
    );
    animate(
      "nav",
      { x: isOpen ? "0%" : "-100%" },
      { type: "tween", duration: 0.5 }
    );
  }, [isOpen]);

  const renderNavLinks = () => {
    return NAV_LINKS.map((link: string, index: number) => {
      return (
        <NavLink
          onClick={() => handleExtendedNavLinks(link)}
          key={index}
          text={link}
          icon={RIGHT_ARROW_ICON}
        />
      );
    });
  };

  return (
    <>
      <motion.nav
        initial={{ x: "-100%" }}
        className={`${styles.menu} container`}
      >
        <ul>{renderNavLinks()}</ul>
        <NavLinkExtended
          isNavLinkExtended={extendNavLink}
          setIsNavLinkExtended={setExtendNavLink}
          links={extendedLink}
          title={selectedNavLink}
        />
      </motion.nav>
    </>
  );
};

export default Menu;
