
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/data/portfolioData";

interface SkillBadgeProps {
  name: string;
  level?: SkillLevel; // Changed from proficiency to level
  className?: string; // This className applies to the outer card div
}

export default function SkillBadge({ name, level, className }: SkillBadgeProps) {
  return (
    <div className={cn(
      "p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow",
      "w-full flex flex-col justify-center items-center text-center h-full", // Ensures content is centered and card fills height
      className // Allows custom styling for the card, e.g., for soft skills
    )}>
      <span className="font-medium text-sm text-foreground">
        {name}
      </span>
      {level && (
        <span className="text-xs text-muted-foreground mt-1">
          Level: {level}
        </span>
      )}
    </div>
  );
}
