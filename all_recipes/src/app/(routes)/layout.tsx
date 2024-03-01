"use client";
import { EB_Garamond, Montserrat, Ephesis } from "next/font/google";
import "@/app/shared/styles/main.scss";
import Header from "../shared/components/organisms/Header";
import { HAMBURGER_ICON, SEARCH_ICON, USER_ICON } from "../shared/constants";

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
      <body className={montserrat.className}>
        <Header
          logo="Kitchenary"
          userIcon={USER_ICON}
          hamburgerIcon={HAMBURGER_ICON}
          searchIcon={SEARCH_ICON}
        />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
