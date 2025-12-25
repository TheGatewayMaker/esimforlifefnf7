import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/#home" },
  { label: "Features", to: "/#features" },
  { label: "Buy eSIM", to: "/#buy" },
  { label: "Refer & Earn", to: "/#refer" },
  { label: "Support", to: "/#support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-accent/20"
      style={{
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="https://i.ibb.co/k2b407jw/esim4lifelogo.png"
              alt="esim4life logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-black tracking-tight text-lg md:text-2xl lg:text-2xl bg-gradient-to-r from-foreground via-foreground to-foreground/85 bg-clip-text text-transparent">
            eSIM4life
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0 lg:gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="px-4 lg:px-5 py-2 md:py-2.5 text-xs md:text-sm font-bold text-foreground/75 hover:text-accent transition-colors duration-300 relative group rounded-lg hover:bg-accent/10"
            >
              {n.label}
              <span className="absolute bottom-1 left-4 lg:left-5 right-4 lg:right-5 h-0.5 bg-gradient-to-r from-accent to-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/#buy"
            className={cn(
              "hidden md:inline-flex px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-br from-accent via-accent to-accent/85 text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-accent/60 hover:border-accent/80",
            )}
            style={{
              boxShadow:
                "0 8px 16px rgba(255, 215, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
            }}
          >
            Buy Now (999 PKR)
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent/40 bg-card hover:bg-accent/15 transition-all duration-300 hover:border-accent/60 shadow-md hover:shadow-lg"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-300",
                  open && "rotate-45 translate-y-2",
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-300",
                  open && "opacity-0",
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-all duration-300",
                  open && "-rotate-45 -translate-y-2",
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-accent/10 bg-background/95 backdrop-blur-sm animate-in fade-in slide-in-from-top-2">
          <div className="container px-4 sm:px-6 py-4 sm:py-5 space-y-1.5">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="block px-4 py-3.5 rounded-lg text-sm font-semibold text-foreground/80 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#buy"
              className="block mt-4 px-5 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-br from-accent via-accent to-accent/85 text-accent-foreground text-center transition-all duration-300 hover:-translate-y-1 border border-accent/60 hover:border-accent/80"
              style={{
                boxShadow:
                  "0 8px 16px rgba(255, 215, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              Buy Now (999 PKR)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
