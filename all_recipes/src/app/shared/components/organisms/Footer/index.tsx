import { FC } from "react";
import styles from "./styles.module.scss";
import Logo, { LogoProps } from "../../atoms/Logo";
import RoundedButton, { RoundedButtonProps } from "../../atoms/RoundedButton";
import { UP_ARROW_ICON } from "@/app/shared/constants";

interface FooterProps extends LogoProps, RoundedButtonProps {
  catchLine: string;
  copyrightText: string;
}

const Footer: FC<FooterProps> = ({
  text,
  to,
  larger,
  icon,
  onClick,
  catchLine,
  copyrightText,
}) => {
  return (
    <div className={styles.footer}>
      <RoundedButton icon={icon} onClick={onClick} />
      <Logo text={text} to={to} larger={larger} />
      <p className={styles.footer__line}>{catchLine}</p>
      <h5 className={styles.footer__copyright}>{copyrightText}</h5>
    </div>
  );
};

export default Footer;
