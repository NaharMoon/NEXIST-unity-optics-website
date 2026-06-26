import Image from "next/image";
import { BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-surface-soft lg:min-h-[85vh]">
      <Image
        alt="Woman wearing premium optical eyeglasses"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/assets/stitch/hero/luxe-hero-model.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-soft via-surface-soft/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-soft via-transparent to-transparent lg:hidden" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pt-20 sm:px-6 lg:min-h-[85vh] lg:px-16">
        <div className="z-10 pb-14 lg:pb-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-brand">
            Premium optical boutique
          </p>
          <h1 className="max-w-xl text-5xl font-bold leading-tight text-ink sm:text-6xl">
            Find Your Perfect <span className="block text-brand">Vision & Style</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-muted">
            Expertly crafted eyewear designed for clinical precision and high-fashion aesthetics.
            Experience luxury that you can see.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 bg-commerce-dark px-7 text-brand-foreground hover:bg-commerce-dark/90">
              Shop Eyeglasses
            </Button>
            <Button className="h-12 border-soft-border px-7" variant="outline">
              <Eye className="size-4" />
              Virtual Try-On
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-ink-muted">
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-brand" />
              Free Delivery
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" />
              30-Day Easy Returns
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
