import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Habit } from "@/types/habit";
import { getDayNames } from "@/utils/getDayNames";

export interface HabitCardProps {
  habit: Habit;
}

export default function HabitCard({ habit }: HabitCardProps) {
  const date = new Date(habit.createdAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedDays = getDayNames(habit.targetDays || []);

  return (
    <Card className="overflow-hidden border-l-4 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftColor: habit.color }}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="flex gap-4">
          <span className="text-3xl" role="img" aria-label="icon">
            {habit.icon}
          </span>
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold leading-none">
              {habit.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {habit.description}
            </CardDescription>
          </div>
        </div>
        <Badge variant="outline" className="font-medium uppercase tracking-wider text-[10px]">
          {habit.frequency}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            <span>{formattedDays}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Desde el {date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
