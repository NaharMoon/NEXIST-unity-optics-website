import { benefits } from "@/data/home";
import { iconMap } from "./icon-map";

export function BenefitsSection() {
  return (
    <section className="border-y border-slate-100 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {benefits.map(({ name, copy, icon }) => {
          const Icon = iconMap[icon];

          return (
            <div className="flex items-center gap-4" key={name}>
              <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-xs text-slate-500">{copy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
