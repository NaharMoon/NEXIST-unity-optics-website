import { Search, ShoppingBag, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Collections", "Prescription", "Sunglasses", "Virtual Try-On"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft-border/50 bg-surface/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-16">
        <a className="text-2xl font-bold tracking-[-0.03em] text-commerce-dark sm:text-[32px]" href="#">
          LUXE OPTICS
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          {navItems.map((item, index) => (
            <a
              className={index === 0 ? "text-brand underline underline-offset-8" : undefined}
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden h-12 w-56 items-center gap-3 rounded-full border border-soft-border/70 bg-surface-muted px-4 text-sm text-ink-subtle lg:flex">
            <Search className="size-4" />
            <span>Search frame...</span>
          </div>
          <Button aria-label="Cart" className="rounded-full" size="icon" variant="ghost">
            <ShoppingBag className="size-5" />
          </Button>
          <Button aria-label="Account" className="rounded-full" size="icon" variant="ghost">
            <UserRound className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
