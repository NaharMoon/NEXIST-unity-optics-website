import { Star } from "lucide-react";
import type { ProductPreview } from "@/types/home";

type ProductCardProps = {
  product: ProductPreview;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
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
  );
}
