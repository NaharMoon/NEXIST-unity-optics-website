import { categories } from "@/data/home";
import { iconMap } from "./icon-map";

export function CollectionsSection() {
  return (
    <section className="bg-surface py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-16">
        <h2 className="text-center text-2xl font-bold">Curated Collections</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon }) => {
            const Icon = iconMap[icon];

            return (
              <a
                className="flex aspect-[1.15] flex-col items-center justify-center gap-4 rounded-2xl border border-soft-border/35 bg-surface-muted text-sm font-medium transition hover:-translate-y-1 hover:bg-surface-soft"
                href="#"
                key={name}
              >
                <span className="grid size-16 place-items-center rounded-full bg-surface text-brand shadow-sm shadow-commerce-dark/5">
                  <Icon className="size-7" />
                </span>
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
