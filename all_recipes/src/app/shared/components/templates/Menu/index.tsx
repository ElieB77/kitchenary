"use client";
import { NAV_LINKS, RIGHT_ARROW_ICON } from "@/app/shared/constants";
import NavLink from "../../atoms/NavLink";
import styles from "./styles.module.scss";
import "@/app/shared/styles/main.scss";
import { FC, useEffect } from "react";
import { animate, stagger } from "framer-motion";

interface MenuProps {
  navLinks?: any;
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ navLinks, isOpen }) => {
  const staggerList = stagger(0.1, { startDelay: 0.5 });

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
