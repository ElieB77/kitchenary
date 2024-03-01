import { CLOSE_ICON, LEFT_ARROW_ICON } from "@/app/shared/constants";
import styles from "./styles.module.scss";
import Image from "next/image";
import { montserrat } from "@/app/(routes)/layout";
import { FC } from "react";

interface NavLinkExtendedProps {
  title: string;
  links: any;
  isNavLinkExtended: boolean;
  setIsNavLinkExtended: any;
}

const NavLinkExtended: FC<NavLinkExtendedProps> = ({
  links,
  title,
  isNavLinkExtended,
  setIsNavLinkExtended,
}) => {
  const closeExtendedNavLink = () => {
    return setIsNavLinkExtended(false);
  };

  console.log(links);

  return (
    isNavLinkExtended && (
      <div className={styles.navLinkExtended}>
        <div className={styles.navLinkExtended__wrapper}>
          <div className={styles.navLinkExtended__wrapper__header}>
            <Image onClick={closeExtendedNavLink} {...LEFT_ARROW_ICON} />
            <Image onClick={closeExtendedNavLink} {...CLOSE_ICON} />
          </div>
          <div className={styles.navLinkExtended__wrapper__title}>
            <h1 className={montserrat.className}>{title}</h1>
          </div>
          <div className={styles.navLinkExtended__wrapper__links}>
            {links.map((link: any, index: number) => {
              return (
                <p key={index} className={montserrat.className}>
                  {link.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default NavLinkExtended;
