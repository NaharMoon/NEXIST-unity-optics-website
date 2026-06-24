import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold">Join the Boutique</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Subscribe for exclusive early access to new collections and lens technology updates.
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <div className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 px-4 lg:max-w-sm">
            <Mail className="size-4 text-slate-400" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              id="email"
              placeholder="Your email address"
              type="email"
            />
          </div>
          <Button className="h-12 bg-slate-950 px-7 text-white hover:bg-slate-800">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
