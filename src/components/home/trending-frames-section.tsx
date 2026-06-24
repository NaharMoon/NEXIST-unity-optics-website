import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/home";

export function TrendingFramesSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Trending Frames</h2>
            <p className="mt-1 text-sm text-ink-subtle">The season&apos;s most coveted designs</p>
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
            <ProductCard index={index} key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
