import Image from "next/image";
import { Focus, RotateCcw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex h-[640px] items-center overflow-hidden bg-surface-soft">
      <div className="absolute inset-y-0 left-1/2 w-full max-w-7xl -translate-x-1/2 overflow-hidden">
        <Image
          alt="Premium optical model wearing eyeglasses"
          className="object-cover object-center"
          fill
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
          src="/assets/stitch/hero/luxe-hero-model.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-soft/35 via-surface-soft/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-soft via-transparent to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-16">
        <div className="max-w-lg space-y-6">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-commerce-dark">
            Find Your Perfect <br />
            <span className="text-brand">Vision & Style</span>
          </h1>
          <p className="max-w-md text-base leading-[1.6] text-ink-muted">
            Expertly crafted eyewear designed for clinical precision and high-fashion aesthetics.
            Experience luxury that you can see.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button className="h-12 rounded-lg bg-commerce-dark px-7 text-sm font-medium text-brand-foreground hover:bg-commerce-dark/90">
              Shop Eyeglasses
            </Button>
            <Button
              className="h-12 rounded-lg border border-commerce-dark bg-transparent px-7 text-sm font-medium text-commerce-dark hover:bg-commerce-dark hover:text-brand-foreground"
              variant="outline"
            >
              <Focus className="size-4" />
              Virtual Try-On
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 text-xs font-semibold text-ink-muted">
            <span className="flex items-center gap-2">
              <Truck className="size-4 text-brand" />
              Free Delivery
            </span>
            <span className="flex items-center gap-2">
              <RotateCcw className="size-4 text-brand" />
              30-Day Easy Returns
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
