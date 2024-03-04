"use client";
import { EB_Garamond, Montserrat, Ephesis } from "next/font/google";
import "@/app/shared/styles/main.scss";
import Header from "../shared/components/organisms/Header";
import {
  CUISINES,
  DIETS,
  HAMBURGER_ICON,
  INGREDIENTS,
  MEALS,
  SEARCH_ICON,
  USER_ICON,
} from "../shared/constants";
import Footer from "../shared/components/organisms/Footer";
import Link from "next/link";
import { NavLinkType } from "../shared/types";
import { LibProvider } from "../shared/context/LibContext";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LibProvider>
        <body className={montserrat.className}>
          <Header
            userIcon={USER_ICON}
            hamburgerIcon={HAMBURGER_ICON}
            searchIcon={SEARCH_ICON}
            text={"kitchenary"}
            to={"/"}
            larger={false}
            isOpen={false}
            firstTitle={"meals"}
            secondTitle={"cuisines"}
            thirdTitle={"ingredients"}
            fourthTitle={"diets"}
            meals={MEALS.map((meal: NavLinkType) => {
              return (
                <Link key={meal.id} href={""}>
                  {meal.name}
                </Link>
              );
            })}
            cuisines={CUISINES.map((meal: NavLinkType) => {
              return (
                <Link key={meal.id} href={""}>
                  {meal.name}
                </Link>
              );
            })}
            ingredients={INGREDIENTS.map((meal: NavLinkType) => {
              return (
                <Link key={meal.id} href={""}>
                  {meal.name}
                </Link>
              );
            })}
            diets={DIETS.map((meal: NavLinkType) => {
              return (
                <Link key={meal.id} href={""}>
                  {meal.name}
                </Link>
              );
            })}
            placeholder={"Search for"}
            icon={SEARCH_ICON}
            loginText={"have an account?"}
            registerText={"don't have an account?"}
            loginLinkText={"login"}
            loginLinkHref={"/auth/login"}
            registerLinkText={"register"}
            registerLinkHref={"/auth/register"}
          />
          <div className="container">{children}</div>
          <Footer text={"kitchenary"} to={"/"} larger={true} />
        </body>
      </LibProvider>
    </html>
  );
}
