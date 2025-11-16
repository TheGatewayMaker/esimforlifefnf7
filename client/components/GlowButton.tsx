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
        "group relative inline-flex items-center justify-center gap-2 md:gap-3 rounded-lg px-5 md:px-7 py-3 md:py-3.5 font-bold text-sm md:text-base",
        "bg-gradient-to-b from-accent via-accent to-accent/90 text-accent-foreground",
        "shadow-[0_4px_12px_rgba(255,215,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,215,0,0.4),0_0_0_3px_rgba(255,215,0,0.1)]",
        "transition-all duration-300 will-change-transform hover:-translate-y-1 hover:scale-105",
        "border border-accent/40 hover:border-accent/60",
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-5 w-5 md:h-6 md:w-6"
          loading="lazy"
        />
      )}
      <span>{label}</span>
      <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none"></span>
    </a>
  );
}
