import { faceShapes } from "@/data/home";
import { iconMap } from "./icon-map";

export function FaceShapeSection() {
  return (
    <section className="bg-surface-soft py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold">Find Frames for Your Face</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faceShapes.map(({ name, copy, icon }) => {
            const Icon = iconMap[icon];

            return (
              <article className="rounded-lg bg-surface p-8 text-center shadow-sm" key={name}>
                <div className="mx-auto grid size-16 place-items-center rounded-full border border-dashed border-soft-border text-brand">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-subtle">{copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
