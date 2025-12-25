import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
      className="sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85 border-b border-accent/20"
      style={{
        boxShadow: "0 4px 12px rgba(61, 207, 220, 0.1)",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 sm:py-5 md:py-6">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <img
              src="https://i.ibb.co/k2b407jw/esim4lifelogo.png"
              alt="esim4life logo"
              className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-black tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl text-foreground hidden sm:inline-block">
            eSIM4life
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-accent transition-all duration-300 relative group rounded-lg hover:bg-accent/10"
            >
              {n.label}
              <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-accent to-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/#buy"
            className={cn(
              "hidden lg:inline-flex px-7 py-3 rounded-lg text-sm font-bold bg-gradient-to-br from-accent via-accent to-accent/85 text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 border border-accent/70 hover:border-accent/90 whitespace-nowrap",
            )}
            style={{
              boxShadow:
                "0 6px 14px rgba(61, 207, 220, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            Buy Now (999 PKR)
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/40 bg-accent/5 hover:bg-accent/10 transition-all duration-300 hover:border-accent/60"
          >
            {open ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-accent/15 bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container px-4 sm:px-6 py-6 space-y-2">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground/75 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#buy"
              className="block mt-4 px-5 py-3 rounded-lg text-sm font-bold bg-gradient-to-br from-accent via-accent to-accent/85 text-accent-foreground text-center transition-all duration-300 hover:-translate-y-0.5 border border-accent/70 hover:border-accent/90"
              style={{
                boxShadow:
                  "0 6px 14px rgba(61, 207, 220, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
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
