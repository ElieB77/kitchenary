import Image from "next/image";
import styles from "./styles.module.scss";
import { RIGHT_ARROW_ICON } from "@/app/shared/constants";
import { ImageType } from "@/app/shared/types";
import { FC } from "react";

interface NavLinkProps {
  text: string;
  icon?: ImageType;
  onClick: () => void;
}

const NavLink: FC<NavLinkProps> = ({ text, icon, onClick }) => {
  return (
    <li onClick={onClick} className={styles.navLinks}>
      <p>{text}</p>
      <Image {...icon!} />
    </li>
  );
};

export default NavLink;
