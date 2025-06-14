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
    <div className={cn("p-4 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm text-foreground">{name}</span>
        {proficiency && (
          <span className="text-xs text-accent font-semibold">{proficiency}%</span>
        )}
      </div>
      {proficiency && (
        <Progress value={proficiency} className="h-2" />
      )}
      {!proficiency && (
         <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">{name}</Badge>
      )}
    </div>
  );
}
