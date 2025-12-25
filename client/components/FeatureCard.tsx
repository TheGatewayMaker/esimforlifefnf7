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
    <div className="group relative rounded border overflow-hidden transition-colors duration-200 h-full flex flex-col" style={{background: "hsl(var(--accent) / 0.05)", borderColor: "hsl(var(--accent) / 0.15)"}}>
      {/* Content */}
      <div className="relative p-6 md:p-7 flex flex-col h-full">
        {/* Icon container */}
        <div className="flex h-12 w-12 items-center justify-center rounded text-accent flex-shrink-0 mb-4 transition-colors duration-200" style={{background: "hsl(var(--accent) / 0.12)", borderColor: "hsl(var(--accent) / 0.2)", border: "1px solid hsl(var(--accent) / 0.2)"}}>
          {icon}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-black tracking-tight mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed font-bold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
