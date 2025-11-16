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
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-2xl"
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderColor: "rgba(255, 215, 0, 0.15)",
      }}
    >
      {/* Accent gradient overlay on hover */}
      <div className="absolute -inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6 md:p-7 flex flex-col h-full">
        {/* Icon container with enhanced styling */}
        <div
          className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg md:rounded-xl text-accent flex-shrink-0 mb-4 shadow-md transition-all duration-300 group-hover:shadow-lg"
          style={{
            background: "rgba(255, 215, 0, 0.12)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderColor: "rgba(255, 215, 0, 0.2)",
          }}
        >
          {icon}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-black tracking-tight mb-2 text-foreground leading-snug">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 h-0.5 w-10 bg-gradient-to-r from-accent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
