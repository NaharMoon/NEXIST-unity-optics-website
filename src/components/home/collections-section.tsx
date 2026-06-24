import { categories } from "@/data/home";
import { iconMap } from "./icon-map";

export function CollectionsSection() {
  return (
    <section className="border-y border-soft-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold">Curated Collections</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon }) => {
            const Icon = iconMap[icon];

            return (
              <a
                className="flex h-32 flex-col items-center justify-center gap-4 rounded-lg border border-soft-border bg-surface-soft text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:bg-surface hover:shadow-md"
                href="#"
                key={name}
              >
                <span className="grid size-12 place-items-center rounded-full bg-surface text-brand shadow-sm">
                  <Icon className="size-5" />
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
