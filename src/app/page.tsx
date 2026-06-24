import Image from "next/image";
import {
  BadgeCheck,
  BookOpen,
  Box,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Circle,
  CreditCard,
  Eye,
  Glasses,
  Mail,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  Truck,
  UserRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Eyeglasses", icon: Glasses },
  { name: "Sunglasses", icon: Sun },
  { name: "Blue Light", icon: Sparkles },
  { name: "Contacts", icon: Eye },
  { name: "Reading", icon: BookOpen },
  { name: "Kids", icon: UserRound },
];

const products = [
  {
    name: "Noho Graphite",
    meta: "Italian Acetate • 3 Colors",
    price: "$195.00",
    tag: "NEW ARRIVAL",
    tint: "from-slate-100 to-white",
  },
  {
    name: "Aviator Elite",
    meta: "Polished Titanium • 2 Colors",
    price: "$210.00",
    tag: "BESTSELLER",
    tint: "from-stone-100 to-white",
  },
  {
    name: "Crystal Clear",
    meta: "Crystal Acetate • 5 Colors",
    price: "$165.00",
    tag: "LIMITED",
    tint: "from-emerald-900/80 to-emerald-100",
  },
  {
    name: "Nightfall Noir",
    meta: "Carbon Fiber • 1 Color",
    price: "$240.00",
    tag: "PREMIUM",
    tint: "from-zinc-100 to-white",
  },
];

const faceShapes = [
  { name: "Round", copy: "Best with: Square or Rectangular frames", icon: Circle },
  { name: "Square", copy: "Best with: Round or Oval frames", icon: Box },
  { name: "Heart", copy: "Best with: Cat-eye or Wayfarers", icon: Sparkles },
  { name: "Oval", copy: "Best with: Wide or Oversized frames", icon: BadgeCheck },
];

const lensTech = [
  {
    title: "Anti-Glare",
    copy: "Premium multi-layer coating for crystal clear vision in all light conditions.",
    icon: Sparkles,
  },
  {
    title: "Blue Cut",
    copy: "Blocks harmful digital light from screens to reduce eye strain and fatigue.",
    icon: ShieldCheck,
  },
  {
    title: "Photochromic",
    copy: "Lenses that intelligently adapt to outdoor sunlight and clear up indoors.",
    icon: Sun,
  },
  {
    title: "Progressive",
    copy: "Seamless transition between near, intermediate, and distance vision.",
    icon: Zap,
  },
];

const benefits = [
  { title: "Free Shipping", copy: "On orders over $99", icon: Truck },
  { title: "Secure Payment", copy: "100% encrypted", icon: ShieldCheck },
  { title: "Easy Returns", copy: "30-day window", icon: Calendar },
  { title: "Certified Quality", copy: "Premium materials", icon: BadgeCheck },
];

const footerLinks = [
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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="text-xl font-bold tracking-wide" href="#">
            LUXE OPTICS
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="text-blue-700 underline underline-offset-8" href="#">
              Collections
            </a>
            <a href="#">Prescription</a>
            <a href="#">Sunglasses</a>
            <a href="#">Virtual Try-On</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden h-10 w-52 items-center gap-2 rounded-full bg-slate-100 px-4 text-sm text-slate-500 sm:flex">
              <Search className="size-4" />
              <span>Search frames...</span>
            </div>
            <Button aria-label="Cart" className="rounded-full" size="icon" variant="ghost">
              <ShoppingBag className="size-5" />
            </Button>
            <Button aria-label="Account" className="rounded-full" size="icon" variant="ghost">
              <UserRound className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-end px-4 pt-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="z-10 pb-10 lg:pb-24">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              Premium optical boutique
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
              Find Your Perfect{" "}
              <span className="block text-blue-700">Vision & Style</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Expertly crafted eyewear designed for clinical precision and modern aesthetics.
              Experience luxury on your face.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 bg-slate-950 px-7 text-white hover:bg-slate-800">
                Shop Eyeglasses
              </Button>
              <Button className="h-12 border-slate-300 px-7" variant="outline">
                <Eye className="size-4" />
                Virtual Try-On
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-blue-700" />
                Free Delivery
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-blue-700" />
                30-Day Easy Returns
              </span>
            </div>
          </div>

          <div className="relative -mx-4 h-[420px] sm:-mx-6 lg:mx-0 lg:h-[620px]">
            <Image
              alt="Woman wearing premium optical eyeglasses"
              className="object-cover object-center lg:rounded-tl-[3rem]"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              src="/luxe-hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent lg:from-white/80" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">Curated Collections</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map(({ name, icon: Icon }) => (
              <a
                className="flex h-32 flex-col items-center justify-center gap-4 rounded-lg border border-slate-100 bg-slate-50 text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                href="#"
                key={name}
              >
                <span className="grid size-12 place-items-center rounded-full bg-white text-blue-700 shadow-sm">
                  <Icon className="size-5" />
                </span>
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-80 overflow-hidden rounded-lg bg-white/95 p-6 text-slate-900">
            <div className="absolute inset-x-10 top-10 h-52 rounded-full bg-slate-200 blur-3xl" />
            <div className="relative grid h-full place-items-center rounded-md border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-200">
              <Glasses className="size-28 text-slate-400" />
            </div>
            <span className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow">
              <span className="size-2 rounded-full bg-emerald-500" />
              LIVE AR ENGINE ACTIVE
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-500">
              Innovation
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold">See Your Style Before You Buy</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              Our proprietary AR technology maps 240+ facial anchor points to ensure an
              accurate, real-world fit. No more guessing, just perfect frames every time.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-medium text-slate-200">
              {["Precision frame scaling", "Instant lighting adjustment", "Share results with friends"].map(
                (item) => (
                  <li className="flex items-center gap-3" key={item}>
                    <BadgeCheck className="size-4 text-blue-500" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <Button className="mt-7 w-fit bg-blue-700 px-7 text-white hover:bg-blue-600">
              Try It Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Trending Frames</h2>
              <p className="mt-1 text-sm text-slate-500">The season&apos;s most coveted designs</p>
            </div>
            <div className="flex gap-2">
              <Button aria-label="Previous products" className="rounded-full" size="icon" variant="outline">
                <ChevronLeft className="size-4" />
              </Button>
              <Button aria-label="Next products" className="rounded-full" size="icon" variant="outline">
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <article
                className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                key={product.name}
              >
                <div className={`relative h-56 bg-gradient-to-br ${product.tint}`}>
                  <span className="absolute left-4 top-4 rounded bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                    {product.tag}
                  </span>
                  <div className="absolute inset-x-8 top-20 h-16 rounded-[50%] border-[10px] border-slate-950/80" />
                  <div className="absolute left-[46%] top-[6.5rem] h-3 w-10 rounded-full bg-slate-950/80" />
                  <div
                    className={`absolute inset-x-10 top-[7.5rem] h-1 rounded-full ${
                      index === 1 ? "bg-amber-700" : "bg-slate-950"
                    }`}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="mt-1 text-xs text-slate-500">{product.meta}</p>
                    </div>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star className="size-3 fill-current" key={starIndex} />
                    ))}
                    <span className="ml-2 text-xs text-slate-400">98</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold">Find Frames for Your Face</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {faceShapes.map(({ name, copy, icon: Icon }) => (
              <article className="rounded-lg bg-white p-8 text-center shadow-sm" key={name}>
                <div className="mx-auto grid size-16 place-items-center rounded-full border border-dashed border-slate-300 text-blue-700">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Advanced Lens Technology</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lensTech.map(({ title, copy, icon: Icon }) => (
              <article className="rounded-lg border border-slate-100 bg-white p-7 shadow-sm" key={title}>
                <Icon className="size-6 text-blue-700" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-lg bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 p-8 text-white shadow-lg sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="rounded bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Limited Time Offer
            </span>
            <h2 className="mt-5 text-4xl font-bold">Buy 1 Get 1 Free</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100">
              Upgrade your vision today. Valid for all prescription eyeglasses and sunglasses
              collections.
            </p>
            <div className="mt-6 flex gap-3">
              {["14 Hours", "07 Mins", "55 Secs"].map((item) => (
                <span className="rounded bg-white/10 px-4 py-3 text-center text-sm font-bold" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Button className="h-12 bg-white px-8 text-slate-950 hover:bg-blue-50">
            Claim Offer Now
          </Button>
        </div>
      </section>

      <section className="border-y border-slate-100 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {benefits.map(({ title, copy, icon: Icon }) => (
            <div className="flex items-center gap-4" key={title}>
              <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-slate-500">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">Join the Boutique</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Subscribe for exclusive early access to new collections and lens technology updates.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-4 lg:max-w-sm">
              <Mail className="size-4 text-slate-400" />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                id="email"
                placeholder="Your email address"
                type="email"
              />
            </div>
            <Button className="h-12 bg-slate-950 px-7 text-white hover:bg-slate-800">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_2fr] lg:px-8">
          <div>
            <h2 className="font-bold tracking-wide">LUXE OPTICS</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Redefining the optical experience through precision and style since 2024.
            </p>
            <div className="mt-5 flex gap-3">
              <CreditCard className="size-5 text-slate-500" />
              <ShieldCheck className="size-5 text-slate-500" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="underline-offset-4 hover:underline" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
          © 2024 Luxe Optics. Precision Eyewear for the Modern Aesthetic.
        </p>
      </footer>
    </main>
  );
}
