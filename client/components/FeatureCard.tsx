import { ReactNode } from "react";

export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 h-full hover:-translate-y-3 hover:shadow-xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.05) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "rgba(255, 215, 0, 0.3)",
        boxShadow:
          "0 8px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Enhanced accent gradient overlay on hover */}
      <div className="absolute -inset-0 rounded-2xl bg-gradient-to-br from-accent/8 via-accent/0 to-accent/12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-7 md:p-8 flex flex-col h-full">
        {/* Icon container with enhanced styling */}
        <div
          className="flex h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl md:rounded-2xl text-accent flex-shrink-0 mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(255, 215, 0, 0.35)",
            border: "1px solid rgba(255, 215, 0, 0.35)",
            boxShadow:
              "0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {icon}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight mb-2 sm:mb-3 text-foreground leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-foreground/75 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 sm:mt-5 md:mt-6 h-1 w-10 sm:w-12 bg-gradient-to-r from-accent via-accent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </div>
    </div>
  );
}
