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
        "group relative inline-flex items-center justify-center gap-2 md:gap-3 rounded-lg px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 font-bold text-xs sm:text-sm md:text-base",
        "bg-accent text-background",
        "transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-lg",
        "border border-accent/80",
        className,
      )}
      style={{
        boxShadow: "0 4px 12px rgba(61, 207, 220, 0.3)",
      }}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 relative z-10"
          loading="lazy"
        />
      )}
      <span className="relative z-10">{label}</span>
    </a>
  );
}
