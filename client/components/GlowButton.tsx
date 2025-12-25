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
        "inline-flex items-center justify-center gap-2 rounded px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 font-black text-xs sm:text-sm md:text-base",
        "bg-accent text-background",
        "transition-colors duration-200 hover:bg-accent/90",
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
    </a>
  );
}
