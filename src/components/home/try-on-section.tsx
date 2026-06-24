import { BadgeCheck, Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";

const tryOnBenefits = [
  "Precision frame scaling",
  "Instant lighting adjustment",
  "Share results with friends",
];

export function TryOnSection() {
  return (
    <section className="bg-slate-950 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-80 overflow-hidden rounded-lg bg-white/95 p-6 text-slate-900">
          <div className="absolute inset-x-10 top-10 h-52 rounded-full bg-slate-200 blur-3xl" />
          <div className="relative grid h-full place-items-center rounded-md border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-200">
            <Glasses className="size-28 text-slate-400" />
          </div>
          <span className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow">
            <span className="size-2 rounded-full bg-emerald-500" />
            LIVE AR ENGINE ACTIVE
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-500">
            Innovation
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold">See Your Style Before You Buy</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Our proprietary AR technology maps 240+ facial anchor points to ensure an accurate,
            real-world fit. No more guessing, just perfect frames every time.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-medium text-slate-200">
            {tryOnBenefits.map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <BadgeCheck className="size-4 text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
          <Button className="mt-7 w-fit bg-blue-700 px-7 text-white hover:bg-blue-600">
            Try It Now
          </Button>
        </div>
      </div>
    </section>
  );
}
