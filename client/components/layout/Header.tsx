import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

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
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-accent/10">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="https://i.ibb.co/rKHZQ6Wn/esim4lifelogo.png"
              alt="esim4life logo"
              className="h-[52px] w-[52px] md:h-[64px] md:w-[64px] rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-md"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-black tracking-tight text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            eSIM4life
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 lg:gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="px-4 py-2 text-sm font-semibold text-foreground/75 hover:text-accent transition-colors duration-300 relative group"
            >
              {n.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#buy"
            className={cn(
              "hidden md:inline-flex px-6 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-b from-accent to-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-accent/40 hover:border-accent/60",
            )}
          >
            Buy Now (999 PKR)
          </Link>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-card hover:bg-accent/10 transition-all duration-300 hover:border-accent/40 shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-accent" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/60" />
            )}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-card hover:bg-accent/10 transition-all duration-300 hover:border-accent/40 shadow-sm"
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
          <div className="container py-4 space-y-1">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground/80 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#buy"
              className="block mt-3 px-4 py-3 rounded-lg text-sm font-bold bg-gradient-to-b from-accent to-accent/90 text-accent-foreground text-center shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Buy Now (999 PKR)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
