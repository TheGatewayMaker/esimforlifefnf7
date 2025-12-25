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
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-lg border-b border-accent/10 supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 sm:py-5 md:py-6">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <img
            src="https://i.ibb.co/k2b407jw/esim4lifelogo.png"
            alt="esim4life logo"
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded transition-all duration-200"
            loading="lazy"
          />
          <span className="font-black tracking-tight text-base sm:text-lg text-foreground hidden sm:inline-block">
            eSIM4life
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="text-sm font-bold text-foreground/75 hover:text-accent transition-colors duration-200"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/#buy"
            className="hidden lg:inline-flex px-6 py-2.5 rounded text-sm font-semibold bg-accent text-background hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap"
          >
            Buy Now (999 PKR)
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-accent/20 bg-accent/8 hover:bg-accent/12 transition-colors duration-200"
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
        <div className="lg:hidden border-t border-accent/10 bg-background/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container px-4 sm:px-6 py-6 space-y-2">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="block px-4 py-3 rounded text-sm font-bold text-foreground/75 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#buy"
              className="block mt-4 px-5 py-3 rounded text-sm font-semibold bg-accent text-background text-center hover:bg-accent/90 transition-colors duration-200"
            >
              Buy Now (999 PKR)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
