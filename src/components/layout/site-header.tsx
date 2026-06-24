import { Search, ShoppingBag, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Collections", "Prescription", "Sunglasses", "Virtual Try-On"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="text-xl font-bold tracking-wide" href="#">
          LUXE OPTICS
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item, index) => (
            <a
              className={index === 0 ? "text-blue-700 underline underline-offset-8" : undefined}
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden h-10 w-52 items-center gap-2 rounded-full bg-slate-100 px-4 text-sm text-slate-500 sm:flex">
            <Search className="size-4" />
            <span>Search frames...</span>
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
