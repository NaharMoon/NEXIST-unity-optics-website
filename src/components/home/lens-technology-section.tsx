import { lensTechnology } from "@/data/home";
import { iconMap } from "./icon-map";

export function LensTechnologySection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Advanced Lens Technology</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lensTechnology.map(({ name, copy, icon }) => {
            const Icon = iconMap[icon];

            return (
              <article className="rounded-lg border border-soft-border bg-surface p-7 shadow-sm" key={name}>
                <Icon className="size-6 text-brand" />
                <h3 className="mt-6 text-lg font-semibold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-subtle">{copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
