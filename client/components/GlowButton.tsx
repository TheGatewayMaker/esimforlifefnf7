import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  icon?: string;
  className?: string;
};

export default function GlowButton({ href, label, icon, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 md:gap-3 rounded-xl px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 font-bold text-xs sm:text-sm md:text-base",
        "bg-gradient-to-br from-accent via-accent to-accent/85 text-accent-foreground",
        "transition-all duration-300 will-change-transform hover:-translate-y-2 hover:scale-105",
        "border border-accent/60 hover:border-accent/80",
        className,
      )}
      style={{
        boxShadow:
          "0 12px 24px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
      }}
    >
      <span
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
        }}
      />
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-120 relative z-10"
          loading="lazy"
        />
      )}
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 pointer-events-none group-hover:ring-white/30 transition-all"></span>
    </a>
  );
}
