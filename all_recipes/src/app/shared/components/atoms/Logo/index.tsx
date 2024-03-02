import Link from "next/link";
import styles from "./styles.module.scss";
import { ephesis } from "@/app/(routes)/layout";
import { FC } from "react";

export interface LogoProps {
  text: string;
  to: string;
  larger: boolean;
}

const Logo: FC<LogoProps> = ({ text, to, larger }) => {
  return (
    <Link className={styles.logo} href={to}>
      <h1 className={`${ephesis.className} ${larger ? styles.larger : ""}`}>
        {text}
      </h1>
    </Link>
  );
};

export default Logo;
