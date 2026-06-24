import { Button } from "@/components/ui/button";

const countdown = ["14 Hours", "07 Mins", "55 Secs"];

export function OfferBanner() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-lg bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 p-8 text-white shadow-lg sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="rounded bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Limited Time Offer
          </span>
          <h2 className="mt-5 text-4xl font-bold">Buy 1 Get 1 Free</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100">
            Upgrade your vision today. Valid for all prescription eyeglasses and sunglasses
            collections.
          </p>
          <div className="mt-6 flex gap-3">
            {countdown.map((item) => (
              <span className="rounded bg-white/10 px-4 py-3 text-center text-sm font-bold" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <Button className="h-12 bg-white px-8 text-slate-950 hover:bg-blue-50">
          Claim Offer Now
        </Button>
      </div>
    </section>
  );
}
