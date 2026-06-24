import { CreditCard, ShieldCheck } from "lucide-react";
import { footerLinks } from "@/data/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_2fr] lg:px-8">
        <div>
          <h2 className="font-bold tracking-wide">LUXE OPTICS</h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            Redefining the optical experience through precision and style since 2024.
          </p>
          <div className="mt-5 flex gap-3">
            <CreditCard className="size-5 text-slate-500" />
            <ShieldCheck className="size-5 text-slate-500" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link}>
                    <a className="underline-offset-4 hover:underline" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
        Copyright 2024 Luxe Optics. Precision Eyewear for the Modern Aesthetic.
      </p>
    </footer>
  );
}
