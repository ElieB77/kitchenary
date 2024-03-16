export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavLinksType = {
  id: string | number;
  name: string;
};

export type NavLinkButtonsType = {
  id: number;
  name: string;
};

export type RoundedCardsType = {
  id: number;
  image: ImageType;
  title: string;
  navigateTo: string;
};

export type PopularCardsType = {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  descriptionIcon: ImageType;
  navigateTo: string;
};
