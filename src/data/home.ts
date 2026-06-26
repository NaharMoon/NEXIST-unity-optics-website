import type { FooterLinkGroup, IconCard, ProductPreview } from "@/types/home";

export const categories: IconCard[] = [
  { name: "Eyeglasses", icon: "glasses" },
  { name: "Sunglasses", icon: "sun" },
  { name: "Blue Light", icon: "sparkles" },
  { name: "Contacts", icon: "eye" },
  { name: "Reading", icon: "bookOpen" },
  { name: "Kids", icon: "userRound" },
];

export const products: ProductPreview[] = [
  {
    name: "Noho Graphite",
    meta: "Italian Acetate - 3 Colors",
    price: "$195.00",
    tag: "NEW ARRIVAL",
    tint: "from-product-tint-1-start to-product-tint-1-end",
    image: "/assets/stitch/products/noho-graphite.png",
    imageAlt: "Premium dark tortoise frames",
    reviews: "98",
  },
  {
    name: "Aviator Elite",
    meta: "Polished Titanium - 2 Colors",
    price: "$210.00",
    tag: "BESTSELLER",
    tint: "from-product-tint-2-start to-product-tint-2-end",
    image: "/assets/stitch/products/aviator-elite.png",
    imageAlt: "Classic tortoise shell sunglasses with gold accents",
    reviews: "86",
  },
  {
    name: "Crystal Clear",
    meta: "Crystal Acetate - 5 Colors",
    price: "$165.00",
    tag: "LIMITED",
    tint: "from-product-tint-3-start to-product-tint-3-end",
    reviews: "74",
  },
  {
    name: "Nightfall Noir",
    meta: "Carbon Fiber - 1 Color",
    price: "$240.00",
    tag: "PREMIUM",
    tint: "from-product-tint-4-start to-product-tint-4-end",
    reviews: "62",
  },
];

export const faceShapes: IconCard[] = [
  { name: "Round", copy: "Best with: Square or Rectangular frames", icon: "circle" },
  { name: "Square", copy: "Best with: Round or Oval frames", icon: "box" },
  { name: "Heart", copy: "Best with: Cat-eye or Wayfarers", icon: "sparkles" },
  { name: "Oval", copy: "Best with: Wide or Oversized frames", icon: "badgeCheck" },
];

export const lensTechnology: IconCard[] = [
  {
    name: "Anti-Glare",
    copy: "Premium multi-layer coating for crystal clear vision in all light conditions.",
    icon: "sparkles",
  },
  {
    name: "Blue Cut",
    copy: "Blocks harmful digital light from screens to reduce eye strain and fatigue.",
    icon: "shieldCheck",
  },
  {
    name: "Photochromic",
    copy: "Lenses that intelligently adapt to outdoor sunlight and clear up indoors.",
    icon: "sun",
  },
  {
    name: "Progressive",
    copy: "Seamless transition between near, intermediate, and distance vision.",
    icon: "zap",
  },
];

export const benefits: IconCard[] = [
  { name: "Free Shipping", copy: "On orders over $99", icon: "truck" },
  { name: "Secure Payment", copy: "100% encrypted", icon: "shieldCheck" },
  { name: "Easy Returns", copy: "30-day window", icon: "calendar" },
  { name: "Certified Quality", copy: "Premium materials", icon: "badgeCheck" },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Shop",
    links: ["Eyeglasses", "Sunglasses", "Prescription Lenses", "Virtual Try-On"],
  },
  {
    title: "Customer Service",
    links: ["Optical Guide", "Store Locator", "Shipping & Returns", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Accessibility"],
  },
];
