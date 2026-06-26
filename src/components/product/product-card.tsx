import Image from "next/image";
import { Star } from "lucide-react";
import type { ProductPreview } from "@/types/home";

type ProductCardProps = {
  product: ProductPreview;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-soft-border bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${product.tint}`}>
        <span className="absolute left-4 top-4 z-10 rounded bg-brand-soft px-2 py-1 text-[10px] font-bold text-brand">
          {product.tag}
        </span>
        {product.image ? (
          <Image
            alt={product.imageAlt ?? product.name}
            className="object-contain p-8 transition duration-500 group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={product.image}
          />
        ) : (
          <>
            <div className="absolute inset-x-8 top-20 h-16 rounded-[50%] border-[10px] border-commerce-dark/80" />
            <div className="absolute left-[46%] top-[6.5rem] h-3 w-10 rounded-full bg-commerce-dark/80" />
            <div
              className={`absolute inset-x-10 top-[7.5rem] h-1 rounded-full ${
                index === 1 ? "bg-rating" : "bg-commerce-dark"
              }`}
            />
          </>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="mt-1 text-xs text-ink-subtle">{product.meta}</p>
          </div>
          <p className="text-sm font-bold">{product.price}</p>
        </div>
        <div className="mt-4 flex items-center gap-1 text-rating">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star className="size-3 fill-current" key={starIndex} />
          ))}
          <span className="ml-2 text-xs text-ink-subtle">{product.reviews ?? "98"}</span>
        </div>
      </div>
    </article>
  );
}
