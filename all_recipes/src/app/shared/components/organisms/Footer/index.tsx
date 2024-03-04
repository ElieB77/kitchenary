import { FC } from "react";
import styles from "./styles.module.scss";
import Logo, { LogoProps } from "../../atoms/Logo";
import RoundedButton from "../../atoms/RoundedButton";
import { UP_ARROW_ICON } from "@/app/shared/constants";

interface FooterProps extends LogoProps {}

const Footer: FC<FooterProps> = ({ text, to, larger }) => {
  return (
    <div className={styles.footer}>
      <Logo text={text} to={to} larger={larger} />
      <RoundedButton icon={UP_ARROW_ICON} />
    </div>
  );
};

export default Footer;