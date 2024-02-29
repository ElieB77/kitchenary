"use client";
import { NAV_LINKS, RIGHT_ARROW_ICON } from "@/app/shared/constants";
import NavLink from "../../atoms/NavLink";
import styles from "./styles.module.scss";
import "@/app/shared/styles/main.scss";
import { FC, useEffect } from "react";
import { animate, stagger, motion, useAnimate } from "framer-motion";

interface MenuProps {
  navLinks?: any;
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ navLinks, isOpen }) => {
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate(
      "li",
      { x: [-100, 0], opacity: [0, 1] },
      { type: "tween", delay: staggerList }
    );
    animate(
      "nav",
      { x: isOpen ? "0vw" : "-100vw" },
      { type: "spring", duration: 1 }
    );
  }, [isOpen]);

  const renderNavLinks = () => {
    return NAV_LINKS.map((link: string, index: number) => {
      return <NavLink key={index} text={link} icon={RIGHT_ARROW_ICON} />;
    });
  };

  return (
    <nav className={`${styles.menu} container`}>
      <ul>{renderNavLinks()}</ul>
    </nav>
  );
};

export default Menu;
