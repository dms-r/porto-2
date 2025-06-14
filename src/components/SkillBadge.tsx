
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  proficiency?: number;
  className?: string;
}

export default function SkillBadge({ name, proficiency, className }: SkillBadgeProps) {
  return (
    <div className={cn("p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow w-full flex flex-col h-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm text-foreground">{name}</span>
        {/* Proficiency percentage text removed from here */}
      </div>
      <div className="mt-auto pt-2"> {/* Ensures content below name is pushed down if badge has extra height */}
        {proficiency ? (
          <Progress value={proficiency} className="h-2" />
        ) : (
          <Badge variant="secondary" className="font-medium bg-secondary text-secondary-foreground">{name}</Badge>
        )}
      </div>
    </div>
  );
}
