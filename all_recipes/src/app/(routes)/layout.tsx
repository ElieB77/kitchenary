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
  UP_ARROW_ICON,
  USER_ICON,
} from "../shared/constants";
import Footer from "../shared/components/organisms/Footer";
import Link from "next/link";
import { NavLinksType } from "../shared/types";
import { LibProvider } from "../shared/context/LibContext";
import useSearchBar from "../features/search/hooks/useSearchBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider } from "../features/authentication/contexts/AuthContext";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AccountProvider } from "../features/account/contexts/AccountContext";
import { scrollToTop } from "../shared/utils";

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
  const { handleSubmit, handleChange, searchValue } = useSearchBar();
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f2ce00",
      },
    },
  });

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LibProvider>
            <AccountProvider>
              <ThemeProvider theme={theme}>
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
                    meals={MEALS.map((meal: NavLinksType) => {
                      return (
                        <Link key={meal.id} href={`/recipes?type=${meal.id}`}>
                          {meal.name}
                        </Link>
                      );
                    })}
                    cuisines={CUISINES.map((cuisine: NavLinksType) => {
                      return (
                        <Link
                          key={cuisine.id}
                          href={`/recipes?cuisine=${cuisine.id}`}
                        >
                          {cuisine.name}
                        </Link>
                      );
                    })}
                    ingredients={INGREDIENTS.map((ingredient: NavLinksType) => {
                      return (
                        <Link
                          key={ingredient.id}
                          href={`/recipes?includeIngredients=${ingredient.id}`}
                        >
                          {ingredient.name}
                        </Link>
                      );
                    })}
                    diets={DIETS.map((diet: NavLinksType) => {
                      return (
                        <Link key={diet.id} href={`/recipes?diet=${diet.id}`}>
                          {diet.name}
                        </Link>
                      );
                    })}
                    placeholder={"Search"}
                    searchBarIcon={SEARCH_ICON}
                    loginText={"have an account?"}
                    registerText={"don't have an account?"}
                    loginLinkText={"login"}
                    loginLinkHref={"/auth/login"}
                    registerLinkText={"register"}
                    registerLinkHref={"/auth/register"}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    value={searchValue}
                    type={"text"}
                  />
                  <div className="container">{children}</div>
                  <Footer
                    text={"kitchenary"}
                    to={"/"}
                    larger={true}
                    catchLine={"dive into a world of recipes with kitchenary!"}
                    copyrightText={"© [2024] ElieB77. All rights reserved."}
                    icon={UP_ARROW_ICON}
                    onClick={() => scrollToTop()}
                  />
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    limit={2}
                    transition={Slide}
                  />
                </body>
              </ThemeProvider>
            </AccountProvider>
          </LibProvider>
        </AuthProvider>
      </QueryClientProvider>
    </html>
  );
}
