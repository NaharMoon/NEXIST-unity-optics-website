export type IconName =
  | "badgeCheck"
  | "bookOpen"
  | "box"
  | "calendar"
  | "circle"
  | "eye"
  | "glasses"
  | "shieldCheck"
  | "sparkles"
  | "sun"
  | "truck"
  | "userRound"
  | "zap";

export type IconCard = {
  name: string;
  copy?: string;
  icon: IconName;
};

export type ProductPreview = {
  name: string;
  meta: string;
  price: string;
  tag: string;
  tint: string;
};

export type FooterLinkGroup = {
  title: string;
  links: string[];
};
