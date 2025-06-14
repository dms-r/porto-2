
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string; // This className applies to the outer card div
  // proficiency is no longer used for rendering
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div className={cn(
      "p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow",
      "w-full flex flex-col justify-center items-center text-center h-full", // Ensures content is centered and card fills height
      className // Allows custom styling for the card, e.g., for soft skills
    )}>
      <span className="font-medium text-sm text-foreground">
        {name}
      </span>
    </div>
  );
}
