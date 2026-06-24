import Image from "next/image";
import { BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-end px-4 pt-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="z-10 pb-10 lg:pb-24">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
            Premium optical boutique
          </p>
          <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
            Find Your Perfect <span className="block text-blue-700">Vision & Style</span>
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
  );
}
