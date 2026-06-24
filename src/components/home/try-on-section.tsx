import { BadgeCheck, Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";

const tryOnBenefits = [
  "Precision frame scaling",
  "Instant lighting adjustment",
  "Share results with friends",
];

export function TryOnSection() {
  return (
    <section className="bg-commerce-dark py-14 text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-80 overflow-hidden rounded-lg bg-surface/95 p-6 text-ink">
          <div className="absolute inset-x-10 top-10 h-52 rounded-full bg-surface-muted blur-3xl" />
          <div className="relative grid h-full place-items-center rounded-md border border-soft-border bg-gradient-to-br from-surface via-surface-soft to-surface-muted">
            <Glasses className="size-28 text-ink-subtle" />
          </div>
          <span className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full bg-surface px-3 py-2 text-xs font-semibold text-ink-muted shadow">
            <span className="size-2 rounded-full bg-commerce-success" />
            LIVE AR ENGINE ACTIVE
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-muted">
            Innovation
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold">See Your Style Before You Buy</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-commerce-light/75">
            Our proprietary AR technology maps 240+ facial anchor points to ensure an accurate,
            real-world fit. No more guessing, just perfect frames every time.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-medium text-commerce-light/90">
            {tryOnBenefits.map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <BadgeCheck className="size-4 text-brand-muted" />
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-7 w-fit bg-brand px-7 text-brand-foreground hover:bg-brand/90">
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  );
}
